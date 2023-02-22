import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateFeedback1672885158393 implements MigrationInterface {
  name = 'UpdateFeedback1672885158393';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`reply_content\` \`reply_content\` varchar(2555) NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`feedback\` CHANGE \`reply_content\` \`reply_content\` varchar(2555) NOT NULL
        `);
  }
}
