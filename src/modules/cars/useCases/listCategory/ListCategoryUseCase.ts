import { Category } from "@mdules/cars/infra/typeorm/entities/Category";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../infra/typeorm/repositories/ICategoriesRepository";

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