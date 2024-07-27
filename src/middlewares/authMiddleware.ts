import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { db } from '../database/knexfile'
import { User } from '../models/user'
import { CustomException } from '../classes/exceptions'
declare global {
    namespace Express {
        interface Request {
            authUser?: User
        }
    }
}
const verifyAuth = async function (
    req: Request,
    res: Response,
    next: NextFunction
) {
    let token = req.header('Authorization')
    if (token?.startsWith('Bearer')) {
        token = token.split(' ')[1]
    }
    const app_key = process.env.APP_KEY
    if (!token) {
        res.status(401).json({ message: 'Unauthenticated' })
    }
    try {
        const decoded: any = verify(token!, app_key!)
        if (decoded) {
            const user: User | undefined = await db<User>('users')
                .where('id', decoded.id)
                .first()
            if (!user) {
                throw new CustomException('User not found')
            }
            req.authUser = user
            next()
        }
    } catch (error) {
        res.status(401).json({ message: 'Unauthenticated' })
    }
}
export default verifyAuth
