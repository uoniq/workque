const db = require('../db')

class PostController{
	async createPost (req, res){
		const {title, content} = req.body
		const newPost = await db.query('INSERT INTO post (title, content) values ($1, $2) RETURNING *', [title, content])
		res.json(newPost.rows[0])
	}
	async getPosts (req, res){
		const id = req.query.id
		const posts = await db.query('select * from post where id = $1', [id])
		res.json(posts.rows)
	}
}

module.exports = new PostController()