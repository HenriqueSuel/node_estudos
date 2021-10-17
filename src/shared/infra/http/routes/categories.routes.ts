import { Router } from 'express';

import multer from 'multer';

import { CreateCategoryController } from '../../../../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../../../../modules/cars/useCases/ImportCategory/ImportCategoryController';
import { ListCategoryController } from '../../../../modules/cars/useCases/listCategory/ListCategoryController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const upload = multer({
    dest: "./tmp"
})

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', ensureAuthenticated, ensureAdmin ,createCategoryController.handle);


categoriesRoutes.get('/', ensureAuthenticated, listCategoryController.handle)

categoriesRoutes.post('/import',ensureAuthenticated, ensureAdmin,  upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };