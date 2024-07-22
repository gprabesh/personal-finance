import { Knex, knex } from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT),
            ssl:
                process.env.DB_SSL == 'true'
                    ? { rejectUnauthorized: false }
                    : false
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }
}
export const db = knex(knexConfig.development)
export default knexConfig
