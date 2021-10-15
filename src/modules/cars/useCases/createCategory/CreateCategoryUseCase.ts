import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository) {}

    async execute({ description, name}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists) {
            throw new Error("Category Already");
        }
    
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }