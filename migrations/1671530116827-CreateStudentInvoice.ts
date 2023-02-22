import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentInvoice1671530116827 implements MigrationInterface {
  name = 'CreateStudentInvoice1671530116827';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`student_invoice\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`content\` varchar(255) NULL,
                \`cost\` varchar(100) NOT NULL,
                \`status\` tinyint NOT NULL DEFAULT 1,
                \`payment_date\` varchar(100) NOT NULL,
                \`qr_url\` varchar(255) NOT NULL,
                \`school_mst\` varchar(255) NOT NULL,
                \`student_id\` bigint NULL,
                \`fee_type_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_invoice\`
            ADD CONSTRAINT \`FK_a00a74a0e03f7304d6170bed9d7\` FOREIGN KEY (\`student_id\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_invoice\`
            ADD CONSTRAINT \`FK_73257ffdfe2ee8b8e445d878409\` FOREIGN KEY (\`fee_type_id\`) REFERENCES \`fee_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student_invoice\` DROP FOREIGN KEY \`FK_73257ffdfe2ee8b8e445d878409\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_invoice\` DROP FOREIGN KEY \`FK_a00a74a0e03f7304d6170bed9d7\`
        `);
    await queryRunner.query(`
            DROP TABLE \`student_invoice\`
        `);
  }
}
