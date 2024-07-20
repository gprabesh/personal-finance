import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('account_groups').del()

    // Inserts seed entries
    await knex('account_groups').insert([
        {
            id: 1,
            name: 'Income',
            code: 'INC',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Expense',
            code: 'EXP',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Assets',
            code: 'AST',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 4,
            name: 'System',
            code: 'SYS',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ])
}
