var db = require('../models')

exports.getTodo = function(req, res){

    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    })
    .catch(function(err){
        console.log('error ----- ' + err)
    })

}

exports.createTodo = function(req, res){

    db.Todo.create()
    .then(function(newTodo){   
        res.json(newTodo)
    })
    .catch(function(err){   
        console.log('error ----- ' + err)
    })

}

exports.showTodo =  function(req, res){
    db.Todo.findById(req.params.id)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        console.log('error ----- ' + err)

    })
}

exports.updateTodo =  function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo)
    })
    .catch(function(err){
        console.log('error ----- ' + err)

    })
}

exports.deleteTodo = function(req, res){

    db.Todo.remove({_id: id})
    .then(function(){
        res.json({message: 'deleted'})
    })   
    .catch(function(err){
        console.log('error ----- ' + err)

    }) 
}


module.exports = exports