const bycrypt = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
	createUser: async args => {
		try {
			const existingUser = await User.findOne({ email: args.userInput.email });
			if (existingUser) {
				throw new Error('User exists already.');
			}
			const hashedPassword = await bycrypt.hash(args.userInput.password, 12);

			const user = new User({
				email: args.userInput.email,
				username: args.userInput.username,
				password: hashedPassword,
			});
			const result = await user.save();

			console.log(result, 'result');
			//_doc is not to get all useless metadata
			return { ...result._doc, password: null };
		} catch (err) {
			console.log(err, 'err');
			throw err;
		}
	},
	login: async ({ email, password }) => {
		const user = await User.findOne({ email: email });
		if (!user) {
			throw new Error('User does not exist!');
		}
		const isEqual = await bycrypt.compare(password, user.password);
		if (!isEqual) {
			throw new Error('Password is Incorrect!');
		}
		const token = jwt.sign(
			{ userId: user.id, email: user.email },
			'somesupersecretkey',
			{
				expiresIn: '1h',
			}
		);
		return {
			userId: user.id,
			token: token,
			tokenExpiration: 1,
			username: user.username,
		};
	},
};
