import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";
import { Transaction } from "../entities/Transaction";
config();
export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Client, Transaction, Banker],
});

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: process.env.DB_HOST || "localhost",
//   port: Number(process.env.DB_PORT) || 5432,
//   username: process.env.DB_USER || "postgres",
//   password: process.env.DB_PASS || "password",
//   database: process.env.DB_NAME || "testdb",
//   synchronize: true,
//   logging: false,
//   entities: [],
// });
