import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'pivot_transactions_people',
        function (table) {
            table.integer('transaction_id').unsigned().notNullable()
            table.integer('people_id').unsigned().notNullable()
            table
                .foreign('transaction_id')
                .references('id')
                .inTable('transactions')
            table.foreign('people_id').references('id').inTable('people')
        }
    )
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('pivot_transactions_people')
}
