const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/message', (req, res) => {
	console.log(req.body);
	Message.createMessage(req.body)
		.then(res.send(201, 'route is hitting server'))
		.catch((err) => {
			res.set('body', err)
			res.send(409)
		})
})

// readAll route
app.get('/message/read', (req, res) => {
	// need to account for async
	Message.readAllMessages(req.body)
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
app.get('/message/read/:id', (req, res) => {
	// need to account for async
	res.set('body', Message.readMessage(req.body.id))
		.then((result) => {
			res.set('body', result)
			res.send(200)
		})
		.catch(err => res.send(err))
})

// update route
app.put('/messages/update/:id', (req, res) => {
	Message.updateMessage(req.body)
		.then(() => res.send(202))
		.catch(err => {
			res.send(err)
		})
	
})

// delete route
app.delete('messages/delete/:id', (req, res) => {
	Message.deleteMessage(id)
		.then(() => res.send(204))
		.catch(err => res.send(err))
})

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
