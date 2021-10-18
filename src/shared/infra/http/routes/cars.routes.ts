import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../config/upload'

import { CreateCarController } from '@mdules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@mdules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { listAvailableCarsController } from '@mdules/cars/useCases/listAvailableCars/listAvailableCarsController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UploadCarImagesController } from '@mdules/cars/useCases/uploadCarImage/uploadCarImageController';


const carsRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));

const createCarController = new CreateCarController();
const listCarController = new listAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin ,createCarController.handle);
carsRoutes.get('/available', ensureAuthenticated ,listCarController.handle);
carsRoutes.post('/specifications/:id', ensureAuthenticated, ensureAdmin,createCarSpecificationController.handle);
carsRoutes.post('/images/:id', ensureAuthenticated, ensureAdmin,upload.array("images"), uploadCarImagesController.handle);


export { carsRoutes };