import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableCars } from "./listAvailableCarsUseCase";

class listAvailableCarsController {

   async handle(request: Request, response: Response): Promise<Response> {
    
    const { brand, name, category_id } = request.query
    
    const listAvailableCars = container.resolve(ListAvailableCars);
        
        const cars =  await listAvailableCars.execute({
            brand: brand as string,
            name: name as string, 
            category_id: category_id as string,
        });
        
        return response.status(201).json(cars);
    }

}


export { listAvailableCarsController }