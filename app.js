const express=require("express")
const app= express()
//const app = require("express")()
app.set('view engine','ejs')

app.use(express.static('public/css/')) // used to make file publicin node js that can be used
app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/register",(req,res)=>{
    res.render('auth/register')
})
app.get("/login",(req,res)=>{
    res.render("auth/login")
})


app.listen(3000,()=>{
    console.log("Project has started at Port Number 3000")
})