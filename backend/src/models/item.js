import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: {
        type: Number, 
        required: true
    },
    calories: {
        type: Number, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    qty: {
        type: Number, 
        required: true, 
        default: 1
    },
    image:[ {
        type: Object, 
        required: true
    }],
    price: {
        type: Number, 
        required: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
},
    {
        timestamps: true, versionKey: false
    }
)
export default mongoose.model("Item", itemSchema);