import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import fs from 'fs'
import csvParse from 'csv-parse'

interface IRequest {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute(file: Express.Multer.File): void {
        

        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse();
        stream.pipe(parseFile)

        parseFile.on('data', async (line) => {
            this.categoriesRepository.create({ name: line[0], description: line[1]})
        })
    }
}

export { ImportCategoryUseCase }