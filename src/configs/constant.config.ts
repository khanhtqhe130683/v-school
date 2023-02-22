import { config } from 'dotenv';
config();
export const NODE_ENV = process.env.NODE_ENV;

export const JWT_CONFIG = {
  SECRET: process.env.TOKEN_SECRET,
  EXPIRED_IN: process.env.TOKEN_EXPIRED_IN,
  SALT_ROUNDS: 12,
};

export const MYSQL_CONFIG = {
  hostMaster: process.env.MYSQL_MASTER_HOST || '',
  hostSlaves: process.env.MYSQL_SLAVES_HOST || '',
  host: process.env.MYSQL_HOST || '',
  username: process.env.MYSQL_USERNAME || '',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE_NAME || '',
  port: +process.env.MYSQL_PORT || 3306,
};

export const REDIS_CONFIG = {
  uri: process.env.CACHE_URI,
  day: 1, // cache 1 day, fix production can change this value or change key
};

export const DEFAULT_ADMIN_USER = {
  username: process.env.DEFAULT_ADMIN_USER,
  password: process.env.DEFAULT_ADMIN_PASSWORD,
  name: process.env.DEFAULT_ADMIN_NAME || 'Administrator',
};

export const SEND_EMAIL_CONFIG = {
  sesAccessKey: process.env.SES_ACCESS_KEY,
  sesSecretKey: process.env.SES_SECRET_KEY,
  sesSendFrom: process.env.SES_SEND_FROM,
  awsRegion: process.env.SES_REGION,
  forgotPasswordMemberSubject: 'Password Reset',
};

export const MEMBER_CONFIG = {
  urlResetPassword: process.env.MEMBER_URL_RESET_PASSWORD,
};
