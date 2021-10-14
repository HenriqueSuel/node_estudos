import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();


specificationsRoutes.post('/', (request, response) => {
    createSpecificationController.handle(request, response);
})
/* 
specificationsRoutes.get('/', (request, response) => {

    const createSpecificationsService = new CreateSpecificationService(specificationsRepositoru);
    
    const all = createSpecificationsService.list();
    
    return response.json(all)
}) */

export { specificationsRoutes };