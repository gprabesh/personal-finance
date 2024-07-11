import express from 'express';
import dotenv from 'dotenv';
import knex from 'knex';
import knexConfig from './database/knexfile';
import defaultRoutes from "./routes/defaultRoutes";

dotenv.config();

const app = express();
const db = knex(knexConfig.development);

app.use(express.json());

app.use('/', defaultRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
