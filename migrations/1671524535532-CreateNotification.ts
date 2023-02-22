import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNotification1671524535532 implements MigrationInterface {
  name = 'CreateNotification1671524535532';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`notification\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`content\` varchar(255) NOT NULL,
                \`is_read\` tinyint NOT NULL DEFAULT 0,
                \`receiver_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`notification\`
            ADD CONSTRAINT \`FK_90543bacf107cdd564e9b62cd20\` FOREIGN KEY (\`receiver_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`notification\` DROP FOREIGN KEY \`FK_90543bacf107cdd564e9b62cd20\`
        `);
    await queryRunner.query(`
            DROP TABLE \`notification\`
        `);
  }
}
