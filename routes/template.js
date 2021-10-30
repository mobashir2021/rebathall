const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const templates = require('../models/template')




router.get('/', async (req,res) => {
    try{
        const tempdata = await templates.find()
        res.json(tempdata)
    }catch(err){
        res.send('Error ' + err)
    }
});




router.post('/', (req,res) => {
    var arrObj = [];
    //console.log(JSON.stringify(req.body));
    const data = JSON.parse(JSON.stringify(req.body));
    console.log('------aaa-----');
    console.log(data);
    

    templates.remove({},async (reqdata, resonse) =>{
        
            var tempddd = await resonse;
            
            for (var i = 0; i < data.featurelist.length; i++){
                
                var obj = new templates({
                    data : data.featurelist[i].data,
                    children: data.featurelist[i].children,
                    leaf: data.featurelist[i].leaf,
                    expanded: data.featurelist[i].expanded
                });
                try{
                    const a1 =   obj.save();
                    /* if(i == data.featurelist.length - 1){
                        res.json(a1);
                    } */
                    //res.json(a1);
                }catch(errnew){
                    console.log(errnew);
                    resonse.json('Error')
                } 
            }

            res.json('returneddata');
        
        
        
    }); 
    
    
}) ;

/* router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
}) */

module.exports = router