import  express from "express";
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const users=[
    {
       "id":1,
       "name":"anathole mizero",
       "email":"anathole@gmail.com",
       "phone": "0793490035",
       "password":"1234"
    },
    {
        "id":2,
        "name":"afanyu",
        "email":"afanyu@gmail.com",
        "phone": "0793490035",
        "password":"1238"
     }
]
app.post("/register", (req,res)=>{
    const{name,email,phone,password} = req.body
    const NewUser=
   {
        "id":users.length+1,
        "name":name,
        "email":email,
        "phone":phone,
        "password":password
   }
   if(phone.length < 10)
   {
    res.status(400).json({"message":"Phone nmber is Invalid"})
   }
   users.push(NewUser)
   res.status(200).json({"message":"data recoreded succefully", "newuser":NewUser})
})

app.post("/login", (req,res)=>{
    const{email,password}=  req.body
    if(users.some((data)=>data.email===email && data.password===password))
    {
        res.status(200).json({"massege":"Login succefully!!!"})
    }
    else
    {
        res.status(400).json({"massege":"Email or passowrd is not correct"})
    }
})

app.get("/all", (req,res)=>{
    res.json({"users":users})
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})