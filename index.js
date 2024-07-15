var express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    db = require('./models'),
    todoRoutes = require('./routes/todo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))


app.get('/', function(req, res){
    res.json({message: 'hi there mate!!!'})
})


app.use('/api/todos', todoRoutes)

app.listen(3000, function(){

    console.log('app is running on 3000')
})
