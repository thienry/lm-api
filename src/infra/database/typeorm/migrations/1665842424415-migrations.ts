import { MigrationInterface, QueryRunner } from 'typeorm'

export class migrations1665842424415 implements MigrationInterface {
  name = 'migrations1665842424415'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "locales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "localeId" character varying NOT NULL, "displayName" character varying NOT NULL, "extraInfo" character varying NOT NULL, "languageCode" character varying NOT NULL, "nativeLanguageDescription" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f7a42a6bd1ee3e584a11eb5b37d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "mappings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" character varying NOT NULL, "scriptName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f77700976d4a5ff7d7ed8445c03" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "login" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "aliasId" character varying NOT NULL, "description" character varying NOT NULL, "extraInfo" character varying, "isRestricted" boolean NOT NULL DEFAULT false, "userId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_cbae82ffad7875b968541d2cfea" UNIQUE ("aliasId"), CONSTRAINT "PK_491dee804efb858cdf15a44371d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "aliases" ADD CONSTRAINT "FK_3b8c750a6494056fc51cd856466" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "aliases" DROP CONSTRAINT "FK_3b8c750a6494056fc51cd856466"`
    )
    await queryRunner.query(`DROP TABLE "aliases"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "mappings"`)
    await queryRunner.query(`DROP TABLE "locales"`)
  }
}
