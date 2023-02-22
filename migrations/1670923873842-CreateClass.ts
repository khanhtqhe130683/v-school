import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClass1670923873842 implements MigrationInterface {
  name = 'CreateClass1670923873842';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`class\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name\` varchar(255) NOT NULL,
                \`grade\` int NOT NULL,
                \`school_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`roles\` CHANGE \`type\` \`type\` enum ('1', '2', '3', '4', '5') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`class\`
            ADD CONSTRAINT \`FK_e2b913aac642a625dc0d0d8d64f\` FOREIGN KEY (\`school_id\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`class\` DROP FOREIGN KEY \`FK_e2b913aac642a625dc0d0d8d64f\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`roles\` CHANGE \`type\` \`type\` enum ('1', '2', '3', '4') NOT NULL
        `);
    await queryRunner.query(`
            DROP TABLE \`class\`
        `);
  }
}
