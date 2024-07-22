import { Request, Response } from 'express'
import { db } from '../database/knexfile'
import { LoginRequest } from '../database/interfaces/authInterface'
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
