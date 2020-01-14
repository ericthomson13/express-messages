const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/messages', (req, res) => {
	console.log(req.body);
	Message.createMessage(req.body)
		.then(() => {
			res.send(201, 'route is hitting server')
		})
		.catch((err) => {
			res.set('body', err)
			res.send(409)
		})
})

// readAll route
app.get('/messages', (req, res) => {
	// need to account for async
	Message.readAllMessages()
	.then(result => {
		res.set('body', result)
		res.send(200)
	})
	.catch(err => {
		res.set('body', err)
		res.send(404)
	})
	
})

// readOne route
app.get('/messages/:id', (req, res) => {
	// need to account for async
	Message.readMessage(req.body)
		.then((result) => {
			res.set('body', result)
			res.send(200)
		})
		.catch(err => res.send(err))
})

// update route
app.put('/messages/:id', (req, res) => {
	Message.updateMessage(req.body)
		.then(() => res.send(202))
		.catch(err => {
			res.send(err)
		})
	
})

// delete route
app.delete('messages/:id', (req, res) => {
	Message.deleteMessage(req.body)
		.then(() => res.send(204))
		.catch(err => res.send(err))
})

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
