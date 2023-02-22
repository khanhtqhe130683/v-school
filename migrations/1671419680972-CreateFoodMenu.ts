import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFoodMenu1671419680972 implements MigrationInterface {
  name = 'CreateFoodMenu1671419680972';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`food_menu\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`food_menu\`
            ADD CONSTRAINT \`FK_757c90c29cd04f0154b23cfd376\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`food_menu\` DROP FOREIGN KEY \`FK_757c90c29cd04f0154b23cfd376\`
        `);
    await queryRunner.query(`
            DROP TABLE \`food_menu\`
        `);
  }
}
