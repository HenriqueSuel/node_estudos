import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRespository: ICategoryRepository
        ) {

    }

   async execute(): Promise<Category[]> {
        return await this.categoryRespository.list();
    }
}

export { ListCategoryUseCase }