import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchool1670921836163 implements MigrationInterface {
  name = 'CreateSchool1670921836163';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`school\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name\` varchar(255) NOT NULL,
                \`msthue\` varchar(255) NOT NULL,
                \`tinhthanh\` varchar(255) NOT NULL,
                \`quanhuyen\` varchar(255) NOT NULL,
                \`xaphuong\` varchar(255) NOT NULL,
                \`address\` varchar(255) NOT NULL,
                \`school_type\` enum ('1', '2', '3') NOT NULL,
                \`user_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\`
            ADD CONSTRAINT \`FK_b75c78082d7ea9dff30f9aba409\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`school\` DROP FOREIGN KEY \`FK_b75c78082d7ea9dff30f9aba409\`
        `);
    await queryRunner.query(`
            DROP TABLE \`school\`
        `);
  }
}
