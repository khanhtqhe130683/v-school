import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClassNote1671611074166 implements MigrationInterface {
  name = 'CreateClassNote1671611074166';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`class_note\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`content\` varchar(255) NOT NULL,
                \`is_deleted\` tinyint NOT NULL DEFAULT 0,
                \`class_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`class_note\`
            ADD CONSTRAINT \`FK_28fde9299842cb475df5df7be27\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`class_note\` DROP FOREIGN KEY \`FK_28fde9299842cb475df5df7be27\`
        `);
    await queryRunner.query(`
            DROP TABLE \`class_note\`
        `);
  }
}
