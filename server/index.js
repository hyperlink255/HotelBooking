 import express from "express"
 import "dotenv/config"
 import cors from "cors"
 import morgan from 'morgan'
 import connectDB from "./config/db.js"
 import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"

 
 const app = express()
 app.use(cors())
 app.use(morgan("dev"))

 app.use(clerkMiddleware())
 app.use(express.json())
 
 // end Pointes
 app.use('/api/clerk',clerkWebhooks)

 app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});


 const PORT = process.env.PORT || 3000

 app.listen(PORT, () => {
    connectDB()
    console.log(`Server running is port ${PORT}`)
 })