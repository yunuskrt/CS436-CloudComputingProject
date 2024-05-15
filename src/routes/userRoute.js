const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/register', userController.createUser)
router.get('/searchUser', userController.searchUsers)
router.get('/u/:username', userController.getUserByUsername)
router.get('/:id', userController.getUser)
router.get('/followings/:username', userController.getFollowings)
router.get('/followers/:username', userController.getFollowers)
router.put(
	'/:username/follow',

	userController.followUser
)
router.put(
	'/:username/unfollow',

	userController.unfollowUser
)

module.exports = router
