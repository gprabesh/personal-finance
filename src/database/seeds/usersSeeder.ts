import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  const saltRounds = 10;
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      name: "Prabesh",
      email: "prabesh@localhost.com",
      username: "prabesh",
      password: bcrypt.hashSync("password", saltRounds),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
