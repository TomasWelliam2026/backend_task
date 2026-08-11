import { DataSource } from "typeorm";
import { User } from "../entities/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "",
  database: "backend_db",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
})
