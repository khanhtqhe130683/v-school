import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeacher1670924294845 implements MigrationInterface {
  name = 'CreateTeacher1670924294845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`teacher\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`first_name\` varchar(255) NULL,
                \`last_name\` varchar(255) NULL,
                \`gender\` enum ('1', '2', '3') NOT NULL DEFAULT '1',
                \`dob\` varchar(255) NULL,
                \`phone_number\` varchar(255) NULL,
                \`email\` varchar(255) NULL,
                \`address\` varchar(255) NULL,
                \`status\` enum ('1', '2') NOT NULL DEFAULT '1',
                \`contract_type\` enum ('1', '2') NOT NULL DEFAULT '1',
                \`salary\` varchar(255) NULL,
                \`class_id\` bigint NULL,
                \`user_id\` bigint NULL,
                \`school_id\` bigint NULL,
                UNIQUE INDEX \`REL_d33fa82ee7d3b7f805eb0fb7c8\` (\`class_id\`),
                UNIQUE INDEX \`REL_93f6fa64874b010c5f3a87c3b8\` (\`user_id\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\`
            ADD CONSTRAINT \`FK_d33fa82ee7d3b7f805eb0fb7c89\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\`
            ADD CONSTRAINT \`FK_93f6fa64874b010c5f3a87c3b8b\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\`
            ADD CONSTRAINT \`FK_a1399028f9db85c88f2cf3f0b38\` FOREIGN KEY (\`school_id\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`teacher\` DROP FOREIGN KEY \`FK_a1399028f9db85c88f2cf3f0b38\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\` DROP FOREIGN KEY \`FK_93f6fa64874b010c5f3a87c3b8b\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`teacher\` DROP FOREIGN KEY \`FK_d33fa82ee7d3b7f805eb0fb7c89\`
        `);
    await queryRunner.query(`
            DROP INDEX \`REL_93f6fa64874b010c5f3a87c3b8\` ON \`teacher\`
        `);
    await queryRunner.query(`
            DROP INDEX \`REL_d33fa82ee7d3b7f805eb0fb7c8\` ON \`teacher\`
        `);
    await queryRunner.query(`
            DROP TABLE \`teacher\`
        `);
  }
}
