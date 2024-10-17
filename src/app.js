import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth-router.js'
import tasksRouter from './routes/tasks-router.js'
import cors from 'cors'
import path from 'path';

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

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));  // Ajusta la ruta al archivo index.html en 'src'
  });


export default app