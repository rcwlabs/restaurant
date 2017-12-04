import express from 'express'

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
	res.send('Hey there congrats')
})

app.listen(PORT, () => {
	console.log('worky')
})