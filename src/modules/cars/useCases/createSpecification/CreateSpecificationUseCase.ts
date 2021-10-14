import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepositoru: ISpecificationsRepository) {}

    execute({description, name }: IRequest) {

        const specificationAlreadyExists = this.specificationsRepositoru.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }
        this.specificationsRepositoru.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }