import mongoose from 'mongoose'

const conn = {}

async function dbConnect(){
    if(conn.isConnected){
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    conn.isConnected = db.connections[0].readyState

    console.log(conn.isConnected)
}

export default dbConnect