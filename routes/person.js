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
router.get('/:id', function(req, res){
    Person.findOne({
        //_id: req.params.id
        'name.firstname': req.params.id
    },function(err, people){
            if(err){
                return;
            }
            res.send(people);
	});
});

//findById
router.get('/:id', function(req, res){
    Person.findById(req.params.id,function(err, people){
            if(err){
                return;
            }
            res.send(people);
	});
});

module.exports = router;


