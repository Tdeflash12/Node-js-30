const express=require("express")
const app= express()
//const app = require("express")()
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/about",(req,res)=>{
    res.render('about')
})




app.listen(3000,()=>{
    console.log("Project has started at Port Number 3000")
})