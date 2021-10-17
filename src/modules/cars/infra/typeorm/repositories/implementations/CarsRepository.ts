import { ICreateCarDTO } from "@mdules/cars/dtos/ICreateCardDto";
import { getRepository, Repository } from "typeorm";
import { Car } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";


class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>

    constructor() {
        this.repository = getRepository(Car);
    }

    async create(data: ICreateCarDTO): Promise<Car>  {
        const car  = this.repository.create({...data});

        await this.repository.save(car);

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
          license_plate,
        });
    
        return car;
      }

      async findAvailable(brand?:string, category_id?: string, name?: string):Promise<Car[]> {
        const carsQuery = await this.repository
        .createQueryBuilder("c")
        .where("available = :available", { available: true });
  
      if (brand) {
        carsQuery.andWhere("brand = :brand", { brand });
      }
  
      if (name) {
        carsQuery.andWhere("name = :name", { name });
      }
  
      if (category_id) {
        carsQuery.andWhere("category_id = :category_id", { category_id });
      }
  
      const cars = await carsQuery.getMany();
  
      return cars;
    }
}


export { CarsRepository }