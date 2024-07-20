import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('transaction_types').del()

    // Inserts seed entries
    await knex('transaction_types').insert([
        {
            id: 1,
            name: 'Receipt',
            code: 'R',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Payment',
            code: 'P',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Transfer',
            code: 'TF',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 4,
            name: 'Debt',
            code: 'DB',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 5,
            name: 'Credit',
            code: 'CR',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 6,
            name: 'Debt Paid',
            code: 'DBP',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 7,
            name: 'Credit Received',
            code: 'CRR',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ])
}
