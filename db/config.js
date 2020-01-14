const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema ({
		id: mongoose.Schema.Types.ObjectId,
		name: String,
		message: String
})

const messagesModel = mongoose.model('MessagesDb', messagesSchema)

module.exports = 	mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true})
