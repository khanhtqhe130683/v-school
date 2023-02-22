import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentClass1671523615840 implements MigrationInterface {
  name = 'CreateStudentClass1671523615840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`student_class\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`username\` varchar(255) NULL,
                \`password\` varchar(100) NOT NULL,
                \`student_id\` bigint NULL,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_class\`
            ADD CONSTRAINT \`FK_9555c999c98a9447139a4249216\` FOREIGN KEY (\`student_id\`) REFERENCES \`student\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_class\`
            ADD CONSTRAINT \`FK_3bd8bcc332c16601f9e644208dd\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`student_class\` DROP FOREIGN KEY \`FK_3bd8bcc332c16601f9e644208dd\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`student_class\` DROP FOREIGN KEY \`FK_9555c999c98a9447139a4249216\`
        `);
    await queryRunner.query(`
            DROP TABLE \`student_class\`
        `);
  }
}
