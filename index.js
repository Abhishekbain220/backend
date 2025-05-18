require("dotenv").config()
let db=require("./model/connect")
let express=require("express")
let cookieParser=require("cookie-parser")
let morgan=require("morgan")
let PORT=process.env.PORT || 8000
let cors=require("cors")
const { errorHandler } = require("./middleware/errorHandler")
let app=express()
let productRouter=require("./Routes/productRouter")

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan("tiny"))
app.use(cors({
    origin:true,
    credentials:true
}))

// Routes
app.use("/product",productRouter)

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

// Global Error Handler
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log("Server running on PORT",PORT)
})