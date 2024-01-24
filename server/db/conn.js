import mongoose from "mongoose";
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE);
        console.log('DataBase connected succesfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB