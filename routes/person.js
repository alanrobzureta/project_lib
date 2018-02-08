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