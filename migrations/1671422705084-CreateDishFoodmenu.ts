import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDishFoodmenu1671422705084 implements MigrationInterface {
  name = 'CreateDishFoodmenu1671422705084';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`dish_foodmenu\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`is_using\` tinyint NOT NULL DEFAULT 1,
                \`food_menu_id\` bigint NULL,
                \`dish_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`dish_foodmenu\`
            ADD CONSTRAINT \`FK_4d442382238571d9f3ff4633b6d\` FOREIGN KEY (\`food_menu_id\`) REFERENCES \`food_menu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`dish_foodmenu\`
            ADD CONSTRAINT \`FK_7378f9a762d3d69a58e9b2187ff\` FOREIGN KEY (\`dish_id\`) REFERENCES \`dish\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`dish_foodmenu\` DROP FOREIGN KEY \`FK_7378f9a762d3d69a58e9b2187ff\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`dish_foodmenu\` DROP FOREIGN KEY \`FK_4d442382238571d9f3ff4633b6d\`
        `);
    await queryRunner.query(`
            DROP TABLE \`dish_foodmenu\`
        `);
  }
}
