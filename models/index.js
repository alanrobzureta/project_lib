var mongoose = require('mongoose');

// mongoose connect
mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('Procedimento OK, mongodb foi conectado!');
});


return db;

