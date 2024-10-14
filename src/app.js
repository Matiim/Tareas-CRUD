import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth-router.js'
import tasksRouter from './routes/tasks-router.js'
import cors from 'cors'

const app = express()




app.use(cors({
    origin: 'https://tareas-crud-delta.vercel.app',
    credentials: true
}))
app.use(morgan('dev'))
//es para que express pueda leer json
app.use(express.json())
//es para que se puedan leer las cookies
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api",tasksRouter)


export default app