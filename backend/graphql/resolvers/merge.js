const Post = require('../../models/posts');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

// for a grabbing data of nested elements
// manual population
const user = async userId => {
	try {
		const user = await User.findById(userId);
		return {
			...user._doc,
			_id: user.id,
			// graphql return values but if there is a function it will call the funct
			createdPosts: posts.bind(this, user._doc.createdPosts),
		};
	} catch (err) {
		throw err;
	}
};

const posts = async postIds => {
	try {
		const posts = await Post.find({ _id: { $in: postIds } });
		return posts.map(post => {
			return transformPost(post);
		});
	} catch (err) {
		throw err;
	}
};

const transformPost = post => {
	return {
		...post._doc,
		_id: post.id,
		// get user function inside this function with bind and created
		creator: user.bind(this, post.creator),
	};
};

// exports.transformBooking = transformBooking;

exports.transformPost = transformPost;
// exports.user = user;
// exports.posts = posts;
// exports.singleEvent = singleEvent;
