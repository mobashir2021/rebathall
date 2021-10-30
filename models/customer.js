var mongoose = require('mongoose')

const featureSchema = mongoose.Schema({
    ParentID : String,
    ProductID: String,
    Items: String,
    Price: String,
    UnitOfMeasure: String,
    Quantity: String,
    FinalPrice: String,
    Discount: String,
    DiscountedPrice: String,
    DescForCust: String,
    Bath1: String,
    Bath2: String,
    MinQuantity: String,
    NoteForRep: String,
    Misc: String,
    tempid: Number,
    sid: Number,
    CheckSingle: Number,
    IsinException: Boolean,
    ExceptionID: String
})
 
module.exports = mongoose.model('customer', {
    //CustomerID : String,
    Customername: String,
    Customerphone: String,
    Customeremail: String,
    Address: String,
    Locationdata: String,
    DesgConsult: String,
    DesgConsultEmail: String,
    DatePass: String,
    Jobtotal: String,
    Discountcoupon: String,
    SalesAmt: String,
    AdditionalNotes: String,
    Esignaturedata: String,
    featuredata:  [featureSchema]
    
    /* feature:{
        items:
        [{
        ParentID : String,
        ProductID: String,
        Items: String,
        Price: String,
        UnitOfMeasure: String,
        Quantity: String,
        FinalPrice: String,
        Discount: String,
        DiscountedPrice: String
    }] 
    } */
})
