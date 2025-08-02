import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn_str = process.env.MONGODB_URL
        await mongoose.connect(conn_str)
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
    }
}

export default connectDB