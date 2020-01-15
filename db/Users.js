const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true})

const UsersSchema = new mongoose.Schema({
	id: Number,
	name: String
});

const UsersModel = mongoose.model('Users', UsersSchema);

mongoose.connection.on('error', console.error.bind(console, 'connection error: Users'));
mongoose.connection.once('open', function() {
  console.log('connected to DB Users!')
});

const Users = {
	createUser: async (req) => {
		let newUser = await new UsersModel({id: req.id, name: req.name});
		return await newUser.save((err, newUser) => {
			if (err) {
				return err;
			} else {
				return newUser;
			}
		});
	},
	updateUser: async (req) => {
		let found = await UsersModel.find({id: req.params.id}, (err, result) => {})
		found = found[0];
		found.name = req.body.name;
		return await found.save((err, result) => {
			if (err) {
				return err
			} else {
				return result;
			}
		})
	},
	readAllUsers: async () => {
		return await UsersModel.find((err, result) => {})
	},
	readOneUser: async (req) => {
		return await UsersModel.find({id: req.params.id}, (err, result) => {});
	},
	deleteUser: async (req) => {
		return await UsersModel.deleteOne({id: req.params.id}, (err, result) => {});
	}
}

model.export = Users