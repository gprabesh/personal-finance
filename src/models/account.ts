export interface Account {
    id: number
    name: string
    user_id: number
    account_group_id: number
    created_at: Date
    updated_at: Date | null
    status: number
}
