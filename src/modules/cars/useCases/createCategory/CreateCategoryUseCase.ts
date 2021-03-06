import { CategoriesRepository } from "../../infra/typeorm/repositories/implementations/CategoriesRepository";
import { inject, injectable } from 'tsyringe'
import { AppError } from "../../../../shared/erros/AppError";
import { ICategoryRepository } from "../../infra/typeorm/repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoryRepository) {}

    async execute({ description, name}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists) {
            throw new AppError("Category Already");
        }
    
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }