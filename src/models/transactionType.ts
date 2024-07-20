export interface TransactionType {
    id: number
    name: string
    code: string
    created_at: Date
    updated_at: Date | null
    status: number
}
