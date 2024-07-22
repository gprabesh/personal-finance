import { Router } from 'express'

import { homeRoute } from '../controllers/homeController'
import { loginRoute } from '../controllers/authController'
import verifyAuth from '../middlewares/authMiddleware'

const router = Router()

router.get('/', homeRoute)
router.post('/auth/login', loginRoute)

export default router
