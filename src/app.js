import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser';


const app = express()

app.use(cors());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(bodyParser.json());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

// this is import the booking router 
import bookingRouter from './routes/booking.routes.js'

app.use("/api/v1/booking", bookingRouter)

// this is generate the this types url 
// http://localhost:8000/api/v1/booking/booking


import contactRouter from "./routes/contact.routes.js"
app.use("/api/v1/contact", contactRouter)
// this is imported contact  router 
// http:/localhost:8000/api/v1/contact/contactInfo

export { app }
