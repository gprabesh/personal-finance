export interface TransactionDetail {
    id: number
    debit: number
    credit: number
    account_id: number
    transaction_id: number
    user_id: number
    created_at: Date
    updated_at: Date | null
    status: number
}
