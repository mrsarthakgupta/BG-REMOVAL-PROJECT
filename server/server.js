// import 'dotenv/config'
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


//  app config
const PORT =process.env.PORT || 4000
const app=express()
await connectDB();

//  middlewares
app.use(express.json())
app.use(cors({
    origin: ["https://bg-removal-project-kappa.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
app.use('/uploads', express.static('uploads'));


// api routes
app.use('/api/user',userRouter);
app.get('/' ,(req ,res)=>res.send("API working"))
app.use('/api/image',imageRouter)

app.listen(PORT ,()=>console.log("Server running on port " + PORT))