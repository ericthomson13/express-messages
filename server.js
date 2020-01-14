const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/message', (req, res) => {
	console.log(req.body);
	// need to account for async
	Message.createMessage(req.body);
	res.send(201, 'route is hitting server');
})

// readAll route
app.get('/message/read', (req, res) => {
	// need to account for async
	Message.readAllMessages()
	res.set('body', 'allMessagesGoHere')
	res.send(200)
})

// readOne route
app.get('/message/read/:id', (req, res) => {
	// need to account for async
	Message.readMessage(req.body.id)

	res.send()
})

// update route
app.put('/messages/update/:id', (req, res) => {
	Message.updateMessage(req.body);
	
	res.send()
})

// delete route
app.delete('messages/delete/:id', (req, res) => {
	Message.deleteMessage(id)

	res.send()
})

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
