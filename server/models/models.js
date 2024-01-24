import mongoose from "mongoose";

const apiSchema = new mongoose.Schema({
    name: {
        type: String
    },
    last: {
        type: String
    },
    buy: {
        type: String
    },
    sell: {
        type: String
    },
    volume: {
        type: String
    },
    base_unit: {
        type: String
    }
})

export default mongoose.model('api', apiSchema)