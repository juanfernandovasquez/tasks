import { config as dontenv } from "dotenv";
dontenv();
export const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "tormenta1047",
  database: process.env.DB_DATABASE || "tasksdb",
};
