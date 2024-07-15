var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    helpers = require('../helpers/todos')

router.route('/' )
    .get(helpers.getTodo)
    .post(helpers.createTodo)

router.route('/:id' )
    .get(helpers.showTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports = router