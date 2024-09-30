import mongoose from "mongoose";


export const connectDB = async () =>{
    
    try {
        await mongoose.connect("mongodb+srv://matimartinezz:BMv2bVYmyQqZKzSa@cluster0.kkpp0rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Base de Datos conectada");
    } catch (error) {
        console.log(error);
    }
}
