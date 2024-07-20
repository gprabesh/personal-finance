import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('transactions', function (table) {
        table.increments('id')
        table.string('description')
        table.decimal('amount').defaultTo(0)
        table.integer('user_id').unsigned().notNullable()
        table.integer('transaction_type_id').unsigned().notNullable()
        table.integer('location_id').unsigned().notNullable()
        table.integer('parent_id').unsigned().nullable()
        table.foreign('user_id').references('id').inTable('users')
        table
            .foreign('transaction_type_id')
            .references('id')
            .inTable('transaction_types')
        table.foreign('location_id').references('id').inTable('locations')
        table.foreign('parent_id').references('id').inTable('transactions')
        table.timestamps()
        table.tinyint('status').notNullable().defaultTo(1).index()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('transactions')
}
