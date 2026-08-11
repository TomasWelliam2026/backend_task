import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user";

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  // host: DB_HOST,
  // port: Number(DB_PORT),
  // username: DB_USER,
  // password: DB_PASSWORD,
  // database: DB_NAME,
  host: "http://localhost",
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
