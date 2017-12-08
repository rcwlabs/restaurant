import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializeDB from '../db'
import restaurant from '../controllers/restaurant'

let router = express()

initializeDB(DB => {
	router.use(middleware({ config, DB }))

	router.use('/restaurant', restaurant({ config, DB }))
})

export default router