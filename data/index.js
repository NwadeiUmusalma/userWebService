const express=require("express");
const morgan =require ("morgan");

const port =process.env.PORT || 5000;

const app=express();

app.use(morgan("dev"));

app.get("/", (req, res)=>{
    res.status(202).json({
        status:"success",
        data: users,
    });
    app.get("/",function (req, res){
    res.send("Salma") 
    });
},
app.post("/users", (req, res)=> {
    const user=req.body;
    user.push(user);
    req.status(201).json({
        message:"user has been created",
        data:users,
    })
}),
app.listen(port, ()=> console.log(`Listening on port ${port}`)))