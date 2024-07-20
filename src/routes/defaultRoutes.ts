import { Router } from 'express'

import { homeRoute } from '../controllers/homeController'

const router = Router()

router.get('/', homeRoute)

export default router
