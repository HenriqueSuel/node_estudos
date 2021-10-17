import { CreateCarController } from '@mdules/cars/useCases/createCar/CreateCarController';
import { listAvailableCarsController } from '@mdules/cars/useCases/listAvailableCars/listAvailableCarsController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new listAvailableCarsController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin ,createCarController.handle);
carsRoutes.get('/available', ensureAuthenticated ,listCarController.handle);


export { carsRoutes };