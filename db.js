const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rebath', (err) => {
    if(!err){
        console.log('Mongodb connection succeded!');
    }else{
        console.log(JSON.stringify(err));
    }
});

module.exports = mongoose;
