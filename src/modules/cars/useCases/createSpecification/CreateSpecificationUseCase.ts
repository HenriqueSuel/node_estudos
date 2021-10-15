import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


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
            throw new Error("Specification already exists!")
        }
        await this.specificationsRepositoru.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }