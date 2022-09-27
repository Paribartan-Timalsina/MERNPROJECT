const dotenv=require("dotenv")
dotenv.config({path:"../config/config.env"})
const express=require("express")
const app=express()
app.use(express.json())
app.use(express.static("public"))
const stripe=require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const storeItems=new Map([
    [1,{Price:1000,name:"aalu"}],
    [2,{Price:200,name:"badam"}],
])
