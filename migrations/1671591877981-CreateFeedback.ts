import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFeedback1671591877981 implements MigrationInterface {
  name = 'CreateFeedback1671591877981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`feedback\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`content\` varchar(2555) NOT NULL,
                \`reply_content\` varchar(2555) NOT NULL,
                \`reporter_id\` bigint NULL,
                \`school_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`feedback\`
            ADD CONSTRAINT \`FK_163c7a41b03ac673b7065d0e63b\` FOREIGN KEY (\`reporter_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`feedback\`
            ADD CONSTRAINT \`FK_e64de4a48ac9d45691277edc5a3\` FOREIGN KEY (\`school_id\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_e64de4a48ac9d45691277edc5a3\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`feedback\` DROP FOREIGN KEY \`FK_163c7a41b03ac673b7065d0e63b\`
        `);
    await queryRunner.query(`
            DROP TABLE \`feedback\`
        `);
  }
}
