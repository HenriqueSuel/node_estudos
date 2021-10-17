import { inject, injectable } from "tsyringe";

import { compare } from "bcrypt"
import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../shared/erros/AppError";
import { IUsersRepository } from "@mdules/accounts/infra/typeorm/repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    
    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password}: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email)

        if(!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }


        const token = sign({}, "henrique", {
            subject: user.id,
            expiresIn: "1d"
        });

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token
        }
    }
}

export { AuthenticateUserUseCase }