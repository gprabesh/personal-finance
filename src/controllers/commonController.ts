import { Request, Response } from 'express'
import { CustomException } from '../classes/exceptions'
import { AccountGroup } from '../models/accountGroup'
import { TransactionType } from '../models/transactionType'
import { db } from '../database/knexfile'

export const getAccountGroups = async (req: Request, res: Response) => {
    try {
        let accountGroups = await db<AccountGroup[]>('account_groups').where(
            'status',
            1
        )
        return res.json({ accountGroups: accountGroups }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
export const getTransactionTypes = async (req: Request, res: Response) => {
    try {
        let transactionTypes = await db<TransactionType[]>(
            'transaction_types'
        ).where('status', 1)
        return res.json({ transactionTypes: transactionTypes }).status(200)
    } catch (error) {
        console.log(error)
        let message = 'Something went wrong'
        if (error instanceof CustomException) message = error.message
        res.status(500).json({ message: message })
    }
}
