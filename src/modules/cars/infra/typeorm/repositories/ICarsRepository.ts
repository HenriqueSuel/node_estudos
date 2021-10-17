import { ICreateCarDTO } from "@mdules/cars/dtos/ICreateCardDto";
import { Car } from "../entities/Cars";

interface ICarsRepository {

    findByLicensePlate(license_plate: string): Promise<Car>;
    create(data: ICreateCarDTO): Promise<Car>;
    findAvailable( brand?:string,category_id?: string, name?: string):Promise<Car[]>;
}


export {ICarsRepository}