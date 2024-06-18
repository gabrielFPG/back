import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTabla1718666041754 implements MigrationInterface {
    name = 'UpdateTabla1718666041754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehiculo" ("id" SERIAL NOT NULL, "nombreVehiculo" character varying(250) NOT NULL, "descripcion" text, "categoriaId" integer, CONSTRAINT "PK_79ad0f38366031fd4f2c1efdc62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombreCategoria"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombreCategoria" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD CONSTRAINT "FK_ee31e1f3fda12c8da9badab22ec" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP CONSTRAINT "FK_ee31e1f3fda12c8da9badab22ec"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombreCategoria"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombreCategoria" character varying(50) NOT NULL`);
        await queryRunner.query(`DROP TABLE "vehiculo"`);
    }

}
