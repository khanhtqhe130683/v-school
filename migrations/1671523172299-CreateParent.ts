import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateParent1671523172299 implements MigrationInterface {
  name = 'CreateParent1671523172299';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`parent\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name\` varchar(255) NOT NULL,
                \`gender\` enum ('1', '2', '3') NOT NULL,
                \`dob\` varchar(255) NOT NULL,
                \`phone_number\` varchar(255) NOT NULL,
                \`email\` varchar(255) NULL,
                \`school_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\`
            ADD CONSTRAINT \`FK_b791aa73edfbe4a2cd1817a299b\` FOREIGN KEY (\`school_id\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`parent\` DROP FOREIGN KEY \`FK_b791aa73edfbe4a2cd1817a299b\`
        `);
    await queryRunner.query(`
            DROP TABLE \`parent\`
        `);
  }
}
