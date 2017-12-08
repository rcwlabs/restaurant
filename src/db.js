import mongoose from 'mongoose'
import config from './config'

export default callback => {
	let DB = mongoose.connect(config.DB_URL)
	callback(DB)
}