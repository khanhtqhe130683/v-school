import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudent1670926589405 implements MigrationInterface {
  name = 'CreateStudent1670926589405';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`student\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name\` varchar(255) NOT NULL,
                \`bhyt_num\` varchar(50) NOT NULL,
                \`cmnd\` varchar(50) NOT NULL,
                \`status\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                \`gender\` enum ('1', '2', '3') NOT NULL,
                \`student_code\` varchar(50) NOT NULL,
                \`dob\` varchar(50) NULL,
                \`email\` varchar(255) NULL,
                \`address\` varchar(255) NULL,
                \`parent_phonenum\` varchar(255) NOT NULL,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`student\`
            ADD CONSTRAINT \`FK_85874ee23f2927b59ff5f769f3c\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student\` DROP FOREIGN KEY \`FK_85874ee23f2927b59ff5f769f3c\`
        `);
    await queryRunner.query(`
            DROP TABLE \`student\`
        `);
  }
}
