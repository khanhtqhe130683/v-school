import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAbsenceRequest1671594705011 implements MigrationInterface {
  name = 'CreateAbsenceRequest1671594705011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`absence_request\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`is_teacher\` tinyint NOT NULL DEFAULT 0,
                \`date\` varchar(255) NOT NULL,
                \`is_approved\` tinyint NOT NULL DEFAULT 0,
                \`requester_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`absence_request\`
            ADD CONSTRAINT \`FK_1f8f782bb47bf8cc246439b605c\` FOREIGN KEY (\`requester_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`absence_request\` DROP FOREIGN KEY \`FK_1f8f782bb47bf8cc246439b605c\`
        `);
    await queryRunner.query(`
            DROP TABLE \`absence_request\`
        `);
  }
}
