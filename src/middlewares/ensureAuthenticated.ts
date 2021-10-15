import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
       const { sub: user_id } =  verify(token, 'henrique');

       const usersRepositoy = new UsersRepository();
       const user = usersRepositoy.findById(user_id as string)
        next();
    } catch (error) {
        throw new Error("Invalid Token");
        
    }
}