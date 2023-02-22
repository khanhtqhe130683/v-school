import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFeeType1671529695074 implements MigrationInterface {
  name = 'CreateFeeType1671529695074';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`fee_type\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name_fee\` varchar(255) NOT NULL,
                \`content\` varchar(255) NOT NULL,
                \`school_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`fee_type\`
            ADD CONSTRAINT \`FK_947c4a4faafa5f07245cf57f04e\` FOREIGN KEY (\`school_id\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`fee_type\` DROP FOREIGN KEY \`FK_947c4a4faafa5f07245cf57f04e\`
        `);
    await queryRunner.query(`
            DROP TABLE \`fee_type\`
        `);
  }
}
