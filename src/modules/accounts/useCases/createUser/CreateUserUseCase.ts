import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from 'bcrypt'
import { AppError } from "../../../../shared/erros/AppError";
import { IUsersRepository } from "@mdules/accounts/infra/typeorm/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRespository: IUsersRepository
    ) {}

    async execute({ name,driver_license,email,password }: ICreateUserDTO):Promise<void> {

        const userAlreadyExists = await this.usersRespository.findByEmail(email);

        if(userAlreadyExists) {
            throw new AppError("User already exists")
        }
        const passwordHash = await hash(password, 8)

        await this.usersRespository.create({name,driver_license,email,password: passwordHash})

    }

}

export { CreateUserUseCase }