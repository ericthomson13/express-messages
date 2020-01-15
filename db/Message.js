//Message Model
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});

const messagesSchema = new mongoose.Schema ({
	id: Number,
	name: String,
	message: String
});

const MessageModel = mongoose.model('MessagesDb', messagesSchema);

let sampleBody = { id: 1, name: 'Criminal', message: 'What Are You?' }

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Message = {
	createMessage: async function (body) {
			console.log('made it to create messages func');
			// create message from body and then add id and add to db
			let newMessage = new MessageModel({id: body.id, name: body.name, message: body.message});
			console.log('newMessage: ' + newMessage);
			let result = await newMessage.save((err, newMessage) => {
				if (err) {
					return err;
				} else {
					return newMessage.message;
				}
			});
			return result;
	},

	readAllMessages () {
		// read all messages on db
		// db.readFile()
		// return all messages
		return 'readAll in Progress'
	},

	readMessage () {
		// find message by id

		// return that message
		return 'readOne in Progress'
	},

	updateMessage () {
		// find message by id

		// update the message at id

		// TODO make so only user who created can update

		// return true/false or not found
		return 'update in progress'
	},

	deleteMessage () {
		// find message by id

		// delete message at id

		// TODO make so only user who created can delete

		// return message text or error
		return 'delete in progress'
	}	
}


module.exports = Message;
