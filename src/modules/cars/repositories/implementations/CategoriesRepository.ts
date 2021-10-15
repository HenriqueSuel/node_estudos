import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoriesRepository";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository implements ICategoryRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
        console.log('passou cont', this.repository)
    }


    async create({ name, description }: ICreateCategoryDTO): Promise<void>  {
        console.log('Chegou até aqui')
        const category = await this.repository.create({
            description,
            name
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        return await this.repository.find()
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({name });
    }
}


export { CategoriesRepository }