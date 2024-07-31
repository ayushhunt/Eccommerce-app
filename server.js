import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'




//configure env
dotenv.config();


//database config
connectDB();


//rest object
const app = express();


//middelware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes);



//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>")
})

//Port
const PORT = process.env.PORT;

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running ${process.env.DEV_MODE} on mode on port ${PORT}`.bgCyan.white);
})
