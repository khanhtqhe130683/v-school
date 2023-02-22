import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateSchool1672040338014 implements MigrationInterface {
  name = 'UpdateSchool1672040338014';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`msthue\` \`msthue\` varchar(255) NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`msthue\` \`msthue\` varchar(255) NOT NULL
        `);
  }
}
