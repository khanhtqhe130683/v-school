import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTimeTable1670985157027 implements MigrationInterface {
  name = 'CreateTimeTable1670985157027';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`time_table\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`start_year\` int NOT NULL,
                \`end_year\` int NOT NULL,
                \`semester\` int NOT NULL,
                \`created_by\` varchar(255) NULL,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`time_table\`
            ADD CONSTRAINT \`FK_9c57694d13ae4c2301e7a0e2bce\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`time_table\` DROP FOREIGN KEY \`FK_9c57694d13ae4c2301e7a0e2bce\`
        `);
    await queryRunner.query(`
            DROP TABLE \`time_table\`
        `);
  }
}
