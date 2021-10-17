import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/erros/AppError";
import { ISpecificationsRepository } from "../../infra/typeorm/repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepositoru: ISpecificationsRepository
        ) {}

    async execute({description, name }: IRequest) {

        const specificationAlreadyExists = await this.specificationsRepositoru.findByName(name);

        if(specificationAlreadyExists) {
            throw new AppError("Specification already exists!")
        }
        await this.specificationsRepositoru.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }