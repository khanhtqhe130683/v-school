import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAttendance1670984330378 implements MigrationInterface {
  name = 'CreateAttendance1670984330378';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`attendance\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`date\` varchar(255) NOT NULL,
                \`is_attendance\` tinyint NOT NULL DEFAULT 0,
                \`student_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`attendance\`
            ADD CONSTRAINT \`FK_6200532f3ef99f639a27bdcae7f\` FOREIGN KEY (\`student_id\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`attendance\` DROP FOREIGN KEY \`FK_6200532f3ef99f639a27bdcae7f\`
        `);
    await queryRunner.query(`
            DROP TABLE \`attendance\`
        `);
  }
}
