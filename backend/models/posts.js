const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
