const router = require('express').Router()

const commentController = require('../controllers/commentController')

router.post('/', commentController.addComment)
router.get('/:ArticleId', commentController.getbyPostId)

module.exports = router
