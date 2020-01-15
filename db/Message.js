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
  console.log('connected to DB!')
});

const Message = {
	createMessage: async function (body) {
			let newMessage = await new MessageModel({id: body.id, name: body.name, message: body.message});
			return await newMessage.save((err, newMessage) => {
				if (err) {
					return err;
				} else {
					return newMessage;
				}
			});
	},

	readAllMessages: async () => {
		return await MessageModel.find((err, messages) => {})
	},

	readMessage: async (req) => {
		// this doesn't behave either params aren't params or it's not taking params
		return await MessageModel.find({id: req.params.id}, (err, result) => {})
	},

	updateMessage: async (req) => {
		// find message by id
		let found = await MessageModel.find({id: req.params.id}, (err, result) => {})
		found = found[0];
		found.name = req.body.name;
		found.message = req.body.message;
		return found.save((err, result) => {
			if (err) {
				return err
			} else {
				return result
			}
		})
		// TODO make so only user who created can update
	},

	deleteMessage: async (req, callback) => {
		return await MessageModel.deleteOne({id: req.params.id}, (err, result) => {});
		// TODO make so only user who created can delete
	}	
}


module.exports = Message;
