var express = require('express');
var videoController = require('../controllers/videoAppController');
var router = express.Router();

/* GET home page. */
// router.get('/', videoController.get_all_movies);
router.get('/', videoController.move_to_login);

router.get('/redirectToLogIn', videoController.move_to_login);

router.get('/movies/:id/:movie', videoController.get_one_movie );

router.post('/api', videoController.post_new_review);

module.exports = router;
