const mongoose = require('mongoose');

var mongoURL='mongodb+srv://Batman:Ayush%401907@cluster0.6zaok3y.mongodb.net/Batcave'


mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});


var connection = mongoose.connection

connection.on('error',()=>{
    console.log('connection error')
});


connection.on('connected',()=>{
    console.log('connection successful')
});

module.exports= mongoose

