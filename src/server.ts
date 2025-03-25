import { config } from "dotenv";

import app from "./app";
import { AppDataSource } from "./database/data-source";

config();

app.listen(process.env.PORT || 8000, async () => {
  try {
    await AppDataSource.initialize();
    console.log("connected to database");
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
});
