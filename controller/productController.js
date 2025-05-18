let Product=require("../model/productSchema")

module.exports.createProduct=async(req,res,next)=>{
    try {
        let {name}=req.body
        let product=await Product.create({name})
        await product.save()
        res.status(200).json({
            message:"Product created successfully",
            product
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.viewProduct=async(req,res,next)=>{
    try {
        let products=await Product.find()
        res.status(200).json({
            products
        })
    } catch (error) {
        console.log(error)
    }
}