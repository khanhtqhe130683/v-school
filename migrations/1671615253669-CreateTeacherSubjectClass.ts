import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeacherSubjectClass1671615253669 implements MigrationInterface {
  name = 'CreateTeacherSubjectClass1671615253669';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`teacher_subject_class\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`teacher_id\` bigint NULL,
                \`subject_class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject_class\`
            ADD CONSTRAINT \`FK_dce427e762013a8f8bf5f31db26\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teacher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject_class\`
            ADD CONSTRAINT \`FK_4035a51747019304b76664875ec\` FOREIGN KEY (\`subject_class_id\`) REFERENCES \`subject_class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject_class\` DROP FOREIGN KEY \`FK_4035a51747019304b76664875ec\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_subject_class\` DROP FOREIGN KEY \`FK_dce427e762013a8f8bf5f31db26\`
        `);
    await queryRunner.query(`
            DROP TABLE \`teacher_subject_class\`
        `);
  }
}
