import Router from 'express'
import Controller from './authController.js'

const router = new Router()
const controller = new Controller()

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

export default router