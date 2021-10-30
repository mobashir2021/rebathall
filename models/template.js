var mongoose = require('mongoose')

function recursive_reference(model, obj, field) {
    if(obj[field] && obj[field].length) {
      var newObjs = []
  
      obj[field].forEach(function(d) {
        newObjs.push( recursive_reference(model, d, field) );
      });
  
      obj[field] = newObjs
    }
  
    return new model(obj)
  }


const projectSchema = new mongoose.Schema({
    
    data: {
        ParentID : String,
        ProductID: String,
        Items: String,
        Price: String,
        UnitOfMeasure: String,
        Quantity: String,
        FinalPrice: String,
        Discount: String,
        DiscountedPrice: String,
        sid: Number,
        DescForCust: String,
        Bath1: String,
        Bath2: String,
        MinQuantity: String,
        NoteForRep: String,
        Misc: String,
        tempid: Number,
        CheckSingle: Number,
        IsinException: Boolean,
        ExceptionID: String,
        sid: Number,
    },
   /*  children:[{
        type: mongoose.Schema.ObjectId,
        ref: 'projectSchema'
    }], */
    children:[this],
    leaf: Boolean,
    expanded: Boolean
});



  var models = mongoose.model('template', projectSchema);

  projectSchema.pre('save', function(next) {
    if (this.isNew) {
      recursive_reference(models, this, "children")
    }
  
    next();
  });
 
  projectSchema.pre('remove', function(next) {
    if (this.isNew) {
      recursive_reference(models, this, "children")
    }
  
    next();
  });
module.exports = models;




