const express = require('express');
const app = express();
const Message = require('./db/Message');
const User = require('./db/Users');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/messages', async (req, res) => {
	try {let message = await Message.createMessage(req.body)
		res.status(201).send('Great success!')
	} catch {
		res.send(404);
	}
})

// readOne route
app.get('/messages/:id', async (req, res) => {
	let message = await Message.readMessage(req)
	res.send({message: message})
})

// readAll route
app.get('/messages', async (req, res) => {
	let messages = await Message.readAllMessages()
	res.body = messages;
	res.send({messages: messages});
})

// update route
app.put('/messages/:id', async (req, res) => {
	let message = await Message.updateMessage(req)
	res.send(202)
})

// delete route
app.delete('/messages/:id', async (req, res) => {
	console.log('hit delete')
		let deleted = await Message.deleteMessage(req)
		console.log('deleted: ' + deleted.n)
		if (deleted.n > 0) {
			res.sendStatus(200);
		} else {
			res.sendStatus(404);
		}
})

// USER ROUTES BELOW





app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
