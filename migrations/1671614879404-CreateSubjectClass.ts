import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSubjectClass1671614879404 implements MigrationInterface {
  name = 'CreateSubjectClass1671614879404';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`subject_class\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`start_year\` int NOT NULL,
                \`semester\` int NOT NULL,
                \`subject_id\` bigint NULL,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`subject_class\`
            ADD CONSTRAINT \`FK_5488f1960e908cdfde71c613781\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`subject_class\`
            ADD CONSTRAINT \`FK_574fa88cf6a4cfd42a4f115d9c6\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`subject_class\` DROP FOREIGN KEY \`FK_574fa88cf6a4cfd42a4f115d9c6\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`subject_class\` DROP FOREIGN KEY \`FK_5488f1960e908cdfde71c613781\`
        `);
    await queryRunner.query(`
            DROP TABLE \`subject_class\`
        `);
  }
}
