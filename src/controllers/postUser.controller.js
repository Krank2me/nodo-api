const User = require('../models/user.model');

async function postUser(req, res) {
	try {
		const user = await User.create(req.body);
		return res.status(201).json(user);
	} catch (error) {
		return res.status(500).json({ message: 'Failed to create user.' });
	}
}

module.exports = postUser;
