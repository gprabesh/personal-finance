import { Request, Response } from 'express'
import { db } from '../database/knexfile'
import {
    LoginRequest,
    UserRegisterRequest
} from '../database/interfaces/authInterface'
import { User } from '../models/user'
import { CustomException } from '../classes/exceptions'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'

export const loginRoute = async (req: Request, res: Response) => {
    try {
        let { usernameOrEmail, password }: LoginRequest = req.body
        let existingUser: User | undefined = await db<User>('users')
            .where('email', usernameOrEmail)
            .first()
        if (!existingUser) {
            throw new CustomException('User not found')
        }
        let matchingPassword = await bcrypt.compare(
            password,
            existingUser.password
        )
        if (!matchingPassword) {
            throw new CustomException('Password Mismatch')
        }
        let encryptionKey = process.env.APP_KEY
        const token = sign(
            {
                id: existingUser.id,
                name: existingUser.name,
                email: existingUser.name,
                username: existingUser.username
            },
            encryptionKey ? encryptionKey : 'asdfasdfsadf',
            { expiresIn: process.env.JWT_TTL }
        )

        const response = {
            token: token
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}

export const registerRoute = async (req: Request, res: Response) => {
    try {
        let {
            name,
            email,
            username,
            password,
            password_confirmation
        }: UserRegisterRequest = req.body
        if (password !== password_confirmation) {
            throw new CustomException(
                'Password and confirm password do not match'
            )
        }
        let existingUser: User | undefined = await db<User>('users')
            .where('email', email)
            .orWhere('username', username)
            .first()
        if (existingUser) {
            throw new CustomException(
                'User already exists with the provided username or email.'
            )
        }
        let hashedPassword = bcrypt.hashSync(password, 10)
        let createdUser = await db('users').insert([
            {
                name: name,
                email: email,
                username: username,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])
        const response = {
            message: 'You have successfully registered.'
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
