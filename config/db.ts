import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const mongooseString: string = process.env.Application_DB!;

export const dbconnect = () => {
    mongoose.connect(mongooseString).then(()=> {
        console.log("connected")
    })
}