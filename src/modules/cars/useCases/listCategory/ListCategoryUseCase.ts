import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryRespository: ICategoryRepository) {

    }

    execute(): Category[] {
        const categories = this.categoryRespository.list();

        return categories;

    }
}

export { ListCategoryUseCase }