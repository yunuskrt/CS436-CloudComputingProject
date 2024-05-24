const mongoose = require('mongoose')

const URI = 'mongodb://35.242.220.49:27017'

const connectDB = async () => {
	try {
		const con = await mongoose.connect(URI)
		console.log('DB Connected Successfully ✅')
	} catch (e) {
		console.log(`Authentication to database failed ❗`)
		process.exit(1)
	}
}

module.exports = connectDB
