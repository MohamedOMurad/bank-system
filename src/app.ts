import cors from "cors";
import { config } from "dotenv";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { AppDataSource } from "./database/data-source";
const app = express();
config();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(3000, async () => {
  try {
    await AppDataSource.initialize();
    console.log("connected to database");
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
});

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected successfully");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("Database connection failed", err));
