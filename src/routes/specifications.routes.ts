import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle)
/* 
specificationsRoutes.get('/', (request, response) => {

    const createSpecificationsService = new CreateSpecificationService(specificationsRepositoru);
    
    const all = createSpecificationsService.list();
    
    return response.json(all)
}) */

export { specificationsRoutes };