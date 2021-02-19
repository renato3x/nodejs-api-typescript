import { Router } from 'express'
import indexController from '../controllers/index.controller'

//router instance
const router = Router()

//routes
router.get('/', indexController.index)

export default router
