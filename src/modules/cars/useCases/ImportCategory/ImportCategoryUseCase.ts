import { CategoriesRepository } from "../../infra/typeorm/repositories/implementations/CategoriesRepository";
import fs from 'fs'
import csvParse from 'csv-parse'
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository
        ) {}

    async execute(file: Express.Multer.File): Promise<void> {
        

        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse();
        stream.pipe(parseFile)

        parseFile.on('data', async (line) => {
            this.categoriesRepository.create({ name: line[0], description: line[1]})
        })
    }
}

export { ImportCategoryUseCase }