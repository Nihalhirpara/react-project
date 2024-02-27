const mongoose =require('mongoose');

const schema= mongoose.Schema({
    ProductName:String,
    ProductWeight:String,
    ProductSize:String,
    ProductImage:String,
    ProductPrice:Number,
    ProductWarranty:String,
    ProductCategory:String
});
module.exports=mongoose.model("Products",schema,"products");