export interface Transaction {
    id: number
    description: string
    amount: number
    user_id: number
    transaction_type_id: number
    location_id: number
    parent_id: number | null
    created_at: Date
    updated_at: Date | null
    status: number
}
