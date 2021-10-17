import { Car } from "@mdules/cars/infra/typeorm/entities/Cars";
import { ICarsRepository } from "@mdules/cars/infra/typeorm/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    brand: string;
    category_id: string;
}

@injectable()
class ListAvailableCars {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
      ) {}

      async execute({
        brand,
        name, 
        category_id 
    }: IRequest): Promise<Car[]> {
       const cars = await this.carsRepository.findAvailable(brand,category_id,name);

       return cars;
      }


}

export { ListAvailableCars }