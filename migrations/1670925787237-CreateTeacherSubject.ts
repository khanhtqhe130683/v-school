import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeacherSubject1670925787237 implements MigrationInterface {
  name = 'CreateTeacherSubject1670925787237';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`teacher_subject\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`teacher_id\` bigint NULL,
                \`subject_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject\`
            ADD CONSTRAINT \`FK_2a9d30cb4207da7ddf7c109097a\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teacher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject\`
            ADD CONSTRAINT \`FK_c876c0444684d4812824989ba2c\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject\` DROP FOREIGN KEY \`FK_c876c0444684d4812824989ba2c\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject\` DROP FOREIGN KEY \`FK_2a9d30cb4207da7ddf7c109097a\`
        `);
    await queryRunner.query(`
            DROP TABLE \`teacher_subject\`
        `);
  }
}
