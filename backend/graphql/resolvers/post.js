const Post = require('../../models/posts');
const User = require('../../models/user');
const { transformPost } = require('./merge');

module.exports = {
	//resolver -- return
	posts: async () => {
		try {
			const posts = await Post.find();
			// the field that you want to populate that must have a ref
			// .populate('creator')
			return posts.map(post => {
				return transformPost(post);
			});
		} catch (err) {
			throw err;
		}
	},
	createPost: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('You are not authenticated');
		}
		const post = new Post({
			title: args.postInput.title,
			description: args.postInput.description,
			body: args.postInput.body,
			imgUrl: args.postInput.imgUrl,
			creator: req.userId,
		});
		console.log(args);
		let createdPost;
		try {
			const result = await post.save();
			//_doc is not to get all useless metadata
			createdPost = transformPost(result);
			const creator = await User.findById(req.userId);

			if (!creator) {
				throw new Error('User not found.');
			}
			creator.createdPosts.push(post);
			await creator.save();

			return createdPost;
		} catch (err) {
			console.log(err, 'err');
			throw err;
		}
	},
};
