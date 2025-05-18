let express=require("express")
const { createProduct, viewProduct } = require("../controller/productController")
let router=express.Router()

router.post("/createProduct",createProduct)
router.get("/viewProduct",viewProduct)

module.exports=router