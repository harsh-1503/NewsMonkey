const express = require('express');
const app = express();

const connectDB = require('./models/connectDB')
const port = process.env.PORT || 5000
const login = require('./routes/login')


//Middlewares
app.use(express.json())
app.use('/',login)

//Routes
app.get('/',(req,res)=>{
    res.send('Hello World');
})


const start = async ()=>{
    try{
        await connectDB()
        app.listen(port,()=>{
            console.log(`Server is listening on ${port}...`);
        })
    }catch(error){
        console.log(error);
    }
}

start()