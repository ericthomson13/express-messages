const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/messages', (req, res) => {
	console.log(req.body);
	Message.createMessage(req)
		.then((err, result) => {
			if (err) {
				res.status(409).send('post was rejected');
			} else {
				res.status(201).send('Great success!: ' + result);
			}
		})
})

// readAll route
app.get('/messages', (req, res) => {
	// need to account for async
	Message.readAllMessages()
	.then((err, result) => {
		res.set('body', result)
		res.status(200);
		res.send()
	})
	.catch(err => {
		res.status(404)
		res.set('body', err)
		res.send()
	})
	
})

// readOne route
app.get('/messages/:id', (req, res) => {
	// need to account for async
	Message.readMessage(req.body, req.params)
		.then((err,result) => {
			res.status(200)
			res.set('body', result)
			res.send()
		})
		.catch(err => res.send(err))
})

// update route
app.put('/messages/:id', (req, res) => {
	Message.updateMessage(req.body, req.params)
		.then((err, result) => res.send(202))
		.catch(err => {
			res.send(err)
		})
	
})

// delete route
app.delete('messages/:id', (req, res) => {
	Message.deleteMessage(req.body, req.params)
		.then((err, result) => res.send(204))
		.catch(err => res.send(err))
})

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
