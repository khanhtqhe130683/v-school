import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateFeeTeacherStudent1671695429090 implements MigrationInterface {
  name = 'UpdateFeeTeacherStudent1671695429090';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`fee_type\`
            ADD \`periods_type\` enum ('1', '2') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\` CHANGE \`status\` \`status\` enum ('1', '2', '3', '4', '5', '6') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`student\` CHANGE \`status\` \`status\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student\` CHANGE \`status\` \`status\` enum ('1', '2') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\` CHANGE \`status\` \`status\` enum ('1', '2') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`fee_type\` DROP COLUMN \`periods_type\`
        `);
  }
}
