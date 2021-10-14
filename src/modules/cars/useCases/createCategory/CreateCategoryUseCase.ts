import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name}: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists) {
            throw new Error("Category Already");
        }
    
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }