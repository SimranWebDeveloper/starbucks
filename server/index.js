require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const Employee=require('./models/Employee')
const jwt = require('jsonwebtoken');

const app=express()
app.use(express.json())
app.use(cors())

// localhost 127.0.0.1
mongoose.connect('mongodb://localhost:27017/employee');

app.post("/login", (req, res)=>{
    const {email, password}=req.body
    Employee.findOne({email:email})
        .then(user => {
            if(user){
                if(user.password === password){
                    const token = jwt.sign({email: user.email, status: user.status}, process.env.JWT_SECRET, {expiresIn: '30d'});
                    res.json({"token":token, "status": user.status, "email": user.email,"name": user.name})
                }else{
                    res.status(403).json({"error": "Istifadeci paswordu sehvdir"})
                }
            }
            else{
                res.status(404).json({"error":"Istifadeci tapilmadi"})
            }
        })
 
})

app.post('/register', (req, res)=>{
    Employee.create(req.body)
        .then(employess => res.json(employess))
        .catch(err => res.json(err))
});

app.post('/me',(req,res)=> {
    const {token} = req.body;
    let decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        } else {
            Employee.findOne({ email: decoded.email }).then((user) => {
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                return res.json({ email: decoded.email,name: user.name,  status: decoded.status });
            })
        }
    })

})


app.listen(3001, ()=>{
    console.log('Server is running on port 3001')
})
