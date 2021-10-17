import { container } from 'tsyringe';
import { UsersRepository } from '@mdules/accounts/infra/typeorm/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@mdules/accounts/infra/typeorm/repositories/IUsersRepository';
import { ICategoryRepository } from '@mdules/cars/infra/typeorm/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@mdules/cars/infra/typeorm/repositories/ISpecificationsRepository';
import { CategoriesRepository } from '@mdules/cars/infra/typeorm/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '@mdules/cars/infra/typeorm/repositories/implementations/SpecificationsRepository';
import { ICarsRepository } from '@mdules/cars/infra/typeorm/repositories/ICarsRepository';
import { CarsRepository } from '@mdules/cars/infra/typeorm/repositories/implementations/CarsRepository';


container.registerSingleton<ICategoryRepository>( "CategoriesRepository", CategoriesRepository)

container.registerSingleton<ISpecificationsRepository>( "SpecificationsRepository", SpecificationsRepository)

container.registerSingleton<IUsersRepository>( "UserRepository", UsersRepository)

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository)