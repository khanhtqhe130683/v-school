import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateScore1671614292073 implements MigrationInterface {
  name = 'CreateScore1671614292073';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`score\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`score_number\` int NOT NULL,
                \`semester\` int NOT NULL,
                \`start_study_year\` int NOT NULL,
                \`score_type\` enum ('1', '2', '3', '4', '5') NOT NULL,
                \`student_id\` bigint NULL,
                \`subject_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`score\`
            ADD CONSTRAINT \`FK_da5822ebe534f86d391e6a0b76e\` FOREIGN KEY (\`student_id\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`score\`
            ADD CONSTRAINT \`FK_9f57ed892be9da95303f674ce88\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`score\` DROP FOREIGN KEY \`FK_9f57ed892be9da95303f674ce88\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`score\` DROP FOREIGN KEY \`FK_da5822ebe534f86d391e6a0b76e\`
        `);
    await queryRunner.query(`
            DROP TABLE \`score\`
        `);
  }
}
