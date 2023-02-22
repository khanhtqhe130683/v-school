import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeacherClass1671444052353 implements MigrationInterface {
  name = 'CreateTeacherClass1671444052353';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`teacher_class\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`is_using\` tinyint NOT NULL DEFAULT 1,
                \`teacher_id\` bigint NULL,
                \`class_id\` bigint NULL,
                \`subject_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\`
            ADD CONSTRAINT \`FK_d36191b0c9aad4d1162f7020d5e\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teacher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\`
            ADD CONSTRAINT \`FK_672b6126112805583052f5623f7\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\`
            ADD CONSTRAINT \`FK_c54766dad509302e7c53f353c97\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\` DROP FOREIGN KEY \`FK_c54766dad509302e7c53f353c97\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\` DROP FOREIGN KEY \`FK_672b6126112805583052f5623f7\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher_class\` DROP FOREIGN KEY \`FK_d36191b0c9aad4d1162f7020d5e\`
        `);
    await queryRunner.query(`
            DROP TABLE \`teacher_class\`
        `);
  }
}
