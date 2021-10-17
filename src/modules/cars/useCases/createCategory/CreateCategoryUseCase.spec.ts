import { CategoriesRepositoryInMemory } from "../../infra/typeorm/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })

    it("should be able to create a new category",async  () => {
        await createCategoryUseCase.execute({
            name: "Category Test",
            description: "category description Test"
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName("Category Test");


        expect(categoryCreated).toHaveProperty("id")
    })
})