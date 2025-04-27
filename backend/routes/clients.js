import express from 'express'
import { newClient } from '../controllers/clientscon.js'

const router = express.Router()

router.post("/estimate", newClient)

export default router