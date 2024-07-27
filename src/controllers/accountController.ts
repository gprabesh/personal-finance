import { Request, Response } from 'express'
import { Account } from '../models/account'
import { db } from '../database/knexfile'
import { CustomException } from '../classes/exceptions'

interface AccountRequest {
    name: string
    account_group_id: number
}
export const indexRoute = async (req: Request, res: Response) => {
    try {
        let accounts = await db<Account>('accounts').where(
            'user_id',
            req.authUser?.id
        )
        return res.json({ accounts: accounts }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
export const createAccountRoute = async (req: Request, res: Response) => {
    try {
        let accountRequest: AccountRequest = req.body
        await db('accounts').insert([
            {
                name: accountRequest.name,
                account_group_id: accountRequest.account_group_id,
                user_id: req.authUser?.id,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])

        return res.json({ message: 'Account Created Successfully' }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
export const updateAccountRoute = async (req: Request, res: Response) => {
    try {
        let accountRequest: AccountRequest = req.body
        await db('accounts').insert([
            {
                name: accountRequest.name,
                account_group_id: accountRequest.account_group_id,
                user_id: req.authUser?.id,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])

        return res.json({ message: 'Account Created Successfully' }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
export const deleteRoute = async (req: Request, res: Response) => {
    try {
        let accountRequest: AccountRequest = req.body
        await db('accounts').insert([
            {
                name: accountRequest.name,
                account_group_id: accountRequest.account_group_id,
                user_id: req.authUser?.id,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])

        return res.json({ message: 'Account Created Successfully' }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
