import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from '../erros/AppError';

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
       const { sub: user_id } =  verify(token, 'henrique');

       const usersRepositoy = new UsersRepository();
       const user = await usersRepositoy.findById(user_id as string);

       if(!user) {
           throw new AppError("User does not exists!", 401);
           
       }
       request.user =  {
        id: user.id
       }
        next();
    } catch (error) {
        throw new AppError("Invalid Token", 401);
        
    }
}