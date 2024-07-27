import { Router } from 'express'

import { homeRoute } from '../controllers/homeController'
import { loginRoute, registerRoute } from '../controllers/authController'
import verifyAuth from '../middlewares/authMiddleware'
import {
    createAccountRoute,
    indexRoute,
    updateAccountRoute
} from '../controllers/accountController'
import {
    getAccountGroups,
    getTransactionTypes
} from '../controllers/commonController'

const router = Router()

router.get('/', homeRoute)
router.post('/auth/login', loginRoute)
router.post('/auth/register', registerRoute)

router.use(verifyAuth)
router.get('/account-groups', getAccountGroups)
router.get('/transaction-types', getTransactionTypes)

router.get('/accounts', indexRoute)
router.post('/accounts', createAccountRoute)
router.patch('/accounts', updateAccountRoute)

export default router
