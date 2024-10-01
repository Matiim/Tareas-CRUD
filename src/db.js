import mongoose from "mongoose";


export const connectDB = async () =>{

    const dbPass = process.env.DB_PASSWORD;
    const dbUser = process.env.DB_USER;
    const dbHost = process.env.DB_HOST;
    
    try {
        await mongoose.connect(`${dbHost}://${dbUser}:${dbPass}@cluster0.kkpp0rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Base de Datos conectada");
    } catch (error) {
        console.log(error);
    }
}
