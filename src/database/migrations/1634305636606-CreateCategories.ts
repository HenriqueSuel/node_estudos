import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1634305636606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "categories",
                    columns: [
                        {
                            name: "id",
                            type: "uuid"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "Now()"
                        }
                    ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories')
    }

}
