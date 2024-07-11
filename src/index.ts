import express from "express";
import dotenv from "dotenv";
import knex from "knex";
import knexConfig from "./database/knexfile";
import defaultRoutes from "./routes/defaultRoutes";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
const app = express();
app.use(cors(options));
app.use(helmet());
const db = knex(knexConfig.development);
app.use(express.json());

app.use("/", defaultRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
