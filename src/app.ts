import cors from "cors";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

export default app;
