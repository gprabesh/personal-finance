import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('locations', function (table) {
        table.increments('id')
        table.string('name')
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('id').inTable('users')
        table.timestamps()
        table.tinyint('status').notNullable().defaultTo(1).index()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('locations')
}
