const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const mail = require('./mail');

router.post('/', async (req,res) => {
    //const data = JSON.parse(JSON.stringify(req.body));
    console.log('tempcheck');
    console.log(req.body);

    
    try{
        mail.send(req.body, (res) => {
            res.status(200).json({"status": res ? 'ok' : 'error' });
        });
        
    }catch(errnew){
        res.send('Error')
    } 
});








module.exports = router