import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
const verifyAuth = function (req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')
    const app_key = process.env.APP_KEY
    if (!token) {
        res.status(401).json({ message: 'Unauthenticated' })
    }
    try {
        const decoded = verify(token!, app_key!)
        if (decoded) {
            next()
        }
    } catch (error) {
        res.status(401).json({ message: 'Unauthenticated' })
    }
}
export default verifyAuth
