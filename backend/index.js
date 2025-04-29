import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import firebase from "./databaseconfig.js"
import { get, ref } from 'firebase/database'
import clientRoute from './routes/clients.js'

dotenv.config()

const app = express()

const connect = async () => {
    try {
      const dbRef = ref(firebase, "clients");
      const snapshot = await get(dbRef);
  
      if (snapshot.exists()) {
        console.log("Firebase connected. Data:", snapshot.val());
      } else {
        console.warn("No data found.");
        throw new Error("No data found at firebase database.");
      }
    } catch (error) {
      console.error("Firebase connection error:", error.message);
      throw error;
    }
  }


// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/clients", clientRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(5000, async () => {
    await connect()
    console.log("Connected to backend")
})