import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('transaction_types', function (table) {
        table.increments('id')
        table.string('name')
        table.string('code').unique().index()
        table.timestamps()
        table.tinyint('status').notNullable().defaultTo(1).index()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('transaction_types')
}
