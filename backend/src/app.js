import express from "express";
import taskRoutes from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";

import swaggerJSDOC from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJSDOC(options);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
export default app;
