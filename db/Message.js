//Message Model
const db = require('./config');

let sampleBody = { id: 1, name: 'Criminal', message: 'What Are You?' }

const Message = {
	createMessage (body) {
		// create message from body and then add id and add to db
		db.writeFile()
		// return true/false for err/noerror
		return 'this'
	},

	readAllMessages () {
		// read all messages on db
		db.readFile()
		// return all messages
		
	},

	readMessage () {
		// find message by id

		// return that message

	},

	updateMessage () {
		// find message by id

		// update the message at id

		// TODO make so only user who created can update

		// return true/false or not found

	},

	deleteMessage () {
		// find message by id

		// delete message at id

		// TODO make so only user who created can delete

		// return message text or error
		
	}
}


module.exports = Message;
