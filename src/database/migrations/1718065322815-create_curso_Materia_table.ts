import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCursoMateriaTable1718065322815 implements MigrationInterface {
    name = 'CreateCursoMateriaTable1718065322815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Curso_Materia" ("id" SERIAL NOT NULL, "cursoId" integer NOT NULL, "materiaId" integer NOT NULL, CONSTRAINT "PK_9600f163fba8753f05f46f9a156" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Curso_Materia" ADD CONSTRAINT "FK_e36f3b36a4ac8cbc3483580d341" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Curso_Materia" ADD CONSTRAINT "FK_4456527108925e3203f00500e43" FOREIGN KEY ("materiaId") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Curso_Materia" DROP CONSTRAINT "FK_4456527108925e3203f00500e43"`);
        await queryRunner.query(`ALTER TABLE "Curso_Materia" DROP CONSTRAINT "FK_e36f3b36a4ac8cbc3483580d341"`);
        await queryRunner.query(`DROP TABLE "Curso_Materia"`);
    }

}
