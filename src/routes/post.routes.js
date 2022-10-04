import { Router } from 'express'
import controller from '../controllers'

const router = Router()

router.post('/add', controller.insertPost) // insert one post
router.get('/', controller.getAllPosts) // get all posts
router.get('/:id', controller.getOnePost) // get one post
router.put('/:id', controller.updatePost) // update one post
router.delete('/:id', controller.deletePost) // delete one post
router.get('/search/:search', controller.searchPosts) // search posts
router.put('/workout/view/:id', controller.increaseViewCount)
// router.get('/popular', controller.getMostPopularPosts) // get most popular posts

export default router
