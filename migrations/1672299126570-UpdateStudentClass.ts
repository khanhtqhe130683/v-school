import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateStudentClass1672299126570 implements MigrationInterface {
  name = 'UpdateStudentClass1672299126570';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student_class\` DROP COLUMN \`username\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_class\` DROP COLUMN \`password\`
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student_class\`
            ADD \`password\` varchar(100) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_class\`
            ADD \`username\` varchar(255) NULL
        `);
  }
}
