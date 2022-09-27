const express= require('express')
const path= require('path')
const dotenv= require('dotenv')
const body_parser =require('body-parser')
const connectDB= require('./config/db')

const cors=require('cors')
const ejs=require('ejs')
//const client = require('./config/db')
//Load config
const multer=require("multer")
dotenv.config({path:'./config/config.env'})

connectDB()


const User=require('./models/userschema1')
const ITEMS=require('./models/userschema2')

const app=express() 
app.use(cors(
    // {origin:"http://localhost:3000/"}
));
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './models/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// const upload = multer({ storage: storage }).single("myimage");
// app.post("/uploads",(req,res)=>{
//     upload(req,res,(err)=>{
//         if (err){
//             console.log(err)
//         }else{
//         console.log(req.file)
//         res.send("ok")
//         }
//     })
//     })
// app.get('/',(req,res)=>{

//     // res.sendFile(express.static(path.join(__dirname,'/models/index.ejs')))
//     res.render("demo")
// })
//app.use(express.static(path.join(__dirname,"Router"))) this is used when we have to send file and not now
app.use( '/',require('./Router/routes'))

const PORT=process.env.PORT
const http=require("http")
const server = http.createServer(app);
app.listen(PORT,()=>console.log(`server is running in ${PORT} MODE `))
