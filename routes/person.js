var express = require('express');
var router = express.Router();
var Person = require('../models/Person');

//find
router.get('/', function(req, res){
    Person.find({},function(err, people){
            if(err){
                return;
            }
            res.send(people);
	});
});

//findOne
//router.get('/:id', function(req, res){
//    Person.findOne({
//        //_id: req.params.id
//        'name.firstname': req.params.id
//    },function(err, people){
//            if(err){
//                return;
//            }
//            res.send(people);
//	});
//});

//findById
router.get('/:id', function(req, res){
    Person.findById(req.params.id,function(err, Person){
            if(err){
                return;
            }
            res.send(Person);
	});
});

module.exports = router;

//post.create
// POST -> http://localhost:3000/person
router.post('/', function(req, res){
    Person.create({
        name: {
            firstname: "Maria Lucia",
            lastname: "Souza Gomes"
        },
        age: 61
    },function(err, people){
        if(err){
            return;
        }
        res.send(people);
    });
});

//post.save
// POST -> http://localhost:3000/person/save
router.post('/save', function(req, res){
    var person = new Person({
        name: {
            firstname: "Ana Clara",
            lastname: "Luna Gomes"
        },
        age: 8
    });
    
    person.save(person, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
});

//post.bulk_create (insertMany)
// POST -> http://localhost:3000/person/bulk
router.post('/bulk',function(req, res){
    var arr = [{
        name: {
            firstname: "Debora",
            lastname: "Luna Gomes"
        },
        age: 30
    }, {
        name: {
            firstname: "Sofia",
            lastname: "Luna Gomes"
        },
        age: 2
    }, {
        name: {
            firstname: "Rubens da Silva",
            lastname: "Gomes Neto"
        },
        age: 65
    }];
    
    Person.insertMany(arr,function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
});

//put.update
// PUT -> http://localhost:3000/person/5a7a410ae5de7b0de8c3de00
router.put('/:id',function(req, res){
    Person.update({
        _id: req.params.id
    },{
        name: {
            firstname: "Alan Robson de ",
            lastname: "Souza Gomes"
        }
    }, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
});

//put.findOneAndUpdate (só atualiza os itens setados)
//PUT -> http://localhost:3000/person/update/5a7cc6535f31cc1a8cb1ee30
router.put('/update/:id',function(req, res){
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: "Maria Lucia de ",
            lastname: "Souza Gomes"
        }
    }, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
});

//delete.remove
// DELETE -> http://localhost:3000/person/5a7cc6535f31cc1a8cb1ee30
router.delete('/:id',function(req, res){
    Person.remove({
        _id: req.params.id
    },function(err){
        if(err){
            return;
        }
        res.send(req.params.id);
    });
});

//delete.findOneAndRemove
// DELETE -> http://localhost:3000/person/delete/5a7cc6535f31cc1a8cb1ee30
router.delete('/delete/:id',function(req, res){
    Person.findOneAndRemove({
        _id: req.params.id
    },function(err){
        if(err){
            return;
        }
        res.send(req.params.id);
    });
});