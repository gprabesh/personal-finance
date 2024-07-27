export interface LoginRequest {
    usernameOrEmail: string
    password: string
}

export interface UserRegisterRequest {
    name: string
    email: string
    username: string
    password: string
    password_confirmation: string
}
