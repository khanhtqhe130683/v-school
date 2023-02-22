import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNotificationInvoice1671590632834 implements MigrationInterface {
  name = 'CreateNotificationInvoice1671590632834';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`notification_invoice\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`username\` varchar(255) NULL,
                \`password\` varchar(100) NOT NULL,
                \`student_invoice_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\`
            ADD CONSTRAINT \`FK_2aad559c956b5c7448443eb5aba\` FOREIGN KEY (\`student_invoice_id\`) REFERENCES \`student_invoice\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\` DROP FOREIGN KEY \`FK_2aad559c956b5c7448443eb5aba\`
        `);
    await queryRunner.query(`
            DROP TABLE \`notification_invoice\`
        `);
  }
}
