let mongoose=require("mongoose")

let productSchema=mongoose.Schema({
    name:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("product",productSchema)