import { Router } from 'express';

import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/ImportCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory/';


const upload = multer({
    dest: "./tmp"
})

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
    console.log('Funcinou Hen');
    return createCategoryController.handle(request,response);
})


categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request,response)
})

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request,response)
})

export { categoriesRoutes };