const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser');

app.use(bp.json());

const port = 3000;

// create message route
app.post('/message', (req, res) => {
	res.send(420, 'route is hitting server');
})

// readAll route
app.get('/message', (req, res) => {
	
})

// readOne route
app.get('/message/id/:id', (req, res) => {

})

// update route
app.put('/messages/update/:id', (req, res) => {

})

// delete route


app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
