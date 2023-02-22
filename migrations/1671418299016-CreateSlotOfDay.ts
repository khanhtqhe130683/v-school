import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSlotOfDay1671418299016 implements MigrationInterface {
  name = 'CreateSlotOfDay1671418299016';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`slot_of_day\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`slot_number\` int NOT NULL,
                \`day_session\` varchar(255) NOT NULL,
                \`daytime_table_id\` bigint NULL,
                \`teacher_id\` bigint NULL,
                \`subject_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\`
            ADD CONSTRAINT \`FK_5f37f6483639e7266ee8cfb4ace\` FOREIGN KEY (\`daytime_table_id\`) REFERENCES \`daytime_table\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\`
            ADD CONSTRAINT \`FK_ff82969775857b18792e42835d1\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teacher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\`
            ADD CONSTRAINT \`FK_26c9280aef120f4f8cfa06dc539\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\` DROP FOREIGN KEY \`FK_26c9280aef120f4f8cfa06dc539\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\` DROP FOREIGN KEY \`FK_ff82969775857b18792e42835d1\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`slot_of_day\` DROP FOREIGN KEY \`FK_5f37f6483639e7266ee8cfb4ace\`
        `);
    await queryRunner.query(`
            DROP TABLE \`slot_of_day\`
        `);
  }
}
