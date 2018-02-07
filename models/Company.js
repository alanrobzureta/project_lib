var mongoose = require('mongoose');

var Company = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        name: String,
        number: Number,
        city: String
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', Company);
//var Company = mongoose.model('Company', company);

//var company = mongoose.Schema({
//    name:String
//});
//var Company = mongoose.model('Company',company);
//Company.create({
//    name: 'Company 1'
//},function(err,company){
//    if(err){
//        console.log('error');
//        return
//    }
//    
//    console.log('Created -> ',company);
//});
/* End configs mongoose */
