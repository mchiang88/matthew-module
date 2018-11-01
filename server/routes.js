const router = require('express').Router();
const controller = require('./controller');

router.route('/').get(controller.get);

router.route('/:type/:limit').get(controller.getSort);

module.exports = router;
