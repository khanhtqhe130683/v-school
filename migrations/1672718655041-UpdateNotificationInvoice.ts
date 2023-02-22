import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateNotificationInvoice1672718655041 implements MigrationInterface {
  name = 'UpdateNotificationInvoice1672718655041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\` DROP COLUMN \`username\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\` DROP COLUMN \`password\`
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\`
            ADD \`password\` varchar(100) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`notification_invoice\`
            ADD \`username\` varchar(255) NULL
        `);
  }
}
