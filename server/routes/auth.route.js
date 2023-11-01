import express from 'express'

import { register, login, getAccessToken, getCurrentUser } from '../controllers/auth.js'
import protect from '../middleware/protect.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/access_token', getAccessToken)
router.get('/current_user', protect, getCurrentUser)

export default router
