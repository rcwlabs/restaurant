import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from './config'
import routes from './routes'

const PORT = process.env.PORT || config.PORT
const app = express()

app.use(bodyParser.json({
	limit: config.bodyLimit
}))

app.get('/', (req, res) => {
	res.send('Hey there congrats')
})

app.use('/v1', routes)

app.listen(PORT, () => {
	console.log('worky')
})

export default app