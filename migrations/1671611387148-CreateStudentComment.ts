import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentComment1671611387148 implements MigrationInterface {
  name = 'CreateStudentComment1671611387148';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`student_comment\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`content\` varchar(2555) NOT NULL,
                \`student_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_comment\`
            ADD CONSTRAINT \`FK_d8e99a5b237d2081601c2878d8f\` FOREIGN KEY (\`student_id\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student_comment\` DROP FOREIGN KEY \`FK_d8e99a5b237d2081601c2878d8f\`
        `);
    await queryRunner.query(`
            DROP TABLE \`student_comment\`
        `);
  }
}
