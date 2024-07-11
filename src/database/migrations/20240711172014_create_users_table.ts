import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("name");
    table.string("email").notNullable().index().unique();
    table.string("username").notNullable().index().unique();
    table.string("password");
    table.timestamps();
    table.tinyint("status").notNullable().defaultTo(1).index();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
