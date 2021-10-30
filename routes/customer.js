const express = require('express');
const router = express.Router()
const customers = require('../models/customer')

router.get('/', async (req,res) => {
    try{
        const tempdata = await customers.find()
        res.json(tempdata)
    }catch(err){
        res.send('Error ' + err)
    }
});



router.post('/', async (req,res) => {
    const data = JSON.parse(JSON.stringify(req.body));
    const innerdata = data.customerobj.feature;

    console.log('sdfdsa');
    console.log(req.body);
    var obj = new customers({
        
        Customername: data.customerobj.Customername,
        Customerphone: data.customerobj.Customeremail,
        Customeremail: data.customerobj.Customerphone,
        Address: data.customerobj.Address,
        Locationdata: data.customerobj.Locationdata,
        DesgConsult: data.customerobj.DesgConsult,
        DesgConsultEmail: data.customerobj.DesgConsultEmail,
        DatePass: data.customerobj.DatePass,
        Jobtotal: data.customerobj.Jobtotal,
        Discountcoupon: data.customerobj.Discountcoupon,
        SalesAmt: data.customerobj.SalesAmt,
        AdditionalNotes: data.customerobj.AdditionalNotes,
        Esignaturedata: data.customerobj.Esignaturedata
        //feature: data.customerobj.feature
    });

    temparray :  [];
    for (var i = 0; i < innerdata.length; i++){
        var parentid = '';
        var productid = '';
        var items = '';
        var price = '';
        var unitofmeasure = '';
        var quantity = '';
        var finalprice = '';
        var discount = '';
        var discountedprice = '';
        var checksingle = 0;
        var checkmultiple = 0;
        if(innerdata[i]['ParentID'] !== undefined){
            parentid = innerdata[i]['ParentID'];
        }
        if(innerdata[i]['ProductID'] !== undefined){
            productid = innerdata[i]['ProductID'];
        }
        if(innerdata[i]['Items'] !== undefined){
            items = innerdata[i]['Items'];
        }
        if(innerdata[i]['Price'] !== undefined){
            price = innerdata[i]['Price'];
        }
        if(innerdata[i]['UnitOfMeasure'] !== undefined){
            unitofmeasure = innerdata[i]['UnitOfMeasure'];
        }
        if(innerdata[i]['Quantity'] !== undefined){
            quantity = innerdata[i]['Quantity'];
        }
        if(innerdata[i]['FinalPrice'] !== undefined){
            finalprice = innerdata[i]['FinalPrice'];
        }
        if(innerdata[i]['Discount'] !== undefined){
            discount = innerdata[i]['Discount'];
        }
        if(innerdata[i]['DiscountedPrice'] !== undefined){
            discountedprice = innerdata[i]['DiscountedPrice'];
        }
        if(innerdata[i]['CheckSingle'] !== undefined){
            checksingle = innerdata[i]['CheckSingle'];
        }
        if(innerdata[i]['CheckMultiple'] !== undefined){
            checkmultiple = innerdata[i]['CheckMultiple'];
        }
        obj.featuredata.push({
            ParentID: parentid,
            ProductID: productid,
            Items: items,
            Price: price,
            UnitOfMeasure: unitofmeasure,
            Quantity: quantity,
            FinalPrice: finalprice,
            Discount: discount,
            DiscountedPrice: discountedprice,
            sid: innerdata[i]['sid'],
            tempid: innerdata[i]['tempid'],
            CheckSingle: checksingle
        });
    }


    

    console.log(obj);
    try{
        const a1 =  await obj.save();
        res.json(a1);
    }catch(errnew){
        res.send('Error')
    } 
});


module.exports = router