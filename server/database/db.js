import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const user = process.env.user;
const pass = process.env.password;

const URL = `mongodb+srv://${user}:${pass}@cluster0.n5je67w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connection = async () => {
    try{
        // using function to connect url id the url needed and useunified topology is detailed in the end
        await mongoose.connect(URL,{useUnifiedTopology: true });
        console.log("we rolling database connected");
    }
    catch(err){
        console.log(err.message);
    }
}

export default connection;