import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user";

import dotEnv from 'dotenv';

dotEnv.config() ;

export const AppDataSource = new DataSource({
  // type: "postgres",
  // host: process.env.DB_HOST,
  // port: Number(process.env.DB_PORT),
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
})