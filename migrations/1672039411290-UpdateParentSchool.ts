import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateParentSchool1672039411290 implements MigrationInterface {
  name = 'UpdateParentSchool1672039411290';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`parent\`
            ADD \`user_id\` bigint NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`name\` \`name\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`tinhthanh\` \`tinhthanh\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`quanhuyen\` \`quanhuyen\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`xaphuong\` \`xaphuong\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`address\` \`address\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`school_type\` \`school_type\` enum ('1', '2', '3') NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`name\` \`name\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`gender\` \`gender\` enum ('1', '2', '3') NOT NULL DEFAULT '1'
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`dob\` \`dob\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\`
            ADD CONSTRAINT \`FK_2e1c234ae8f8bb156922e8e417d\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`parent\` DROP FOREIGN KEY \`FK_2e1c234ae8f8bb156922e8e417d\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`dob\` \`dob\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`gender\` \`gender\` enum ('1', '2', '3') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` CHANGE \`name\` \`name\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`school_type\` \`school_type\` enum ('1', '2', '3') NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`address\` \`address\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`xaphuong\` \`xaphuong\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`quanhuyen\` \`quanhuyen\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`tinhthanh\` \`tinhthanh\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`school\` CHANGE \`name\` \`name\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`parent\` DROP COLUMN \`user_id\`
        `);
  }
}
