import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('transaction_details', function (table) {
        table.increments('id')
        table.decimal('debit').defaultTo(0)
        table.decimal('credit').defaultTo(0)
        table.integer('account_id').unsigned().notNullable()
        table.integer('transaction_id').unsigned().notNullable()
        table.integer('user_id').unsigned().notNullable()
        table.foreign('account_id').references('id').inTable('accounts')
        table.foreign('transaction_id').references('id').inTable('transactions')
        table.foreign('user_id').references('id').inTable('users')
        table.timestamps()
        table.tinyint('status').notNullable().defaultTo(1).index()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('transaction_details')
}
