import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgresql://postgres:[YOUR-PASSWORD]@db.jzqvjybgdsorhljwbgul.supabase.co:5432/postgres",
  synchronize: true,
  logging: false,
  entities: [],
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
