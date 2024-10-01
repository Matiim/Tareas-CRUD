import app from './app.js'
import { connectDB } from './db.js';
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto, ${PORT}`);    
})