import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: {type: Number  , required: true},
    name:{
        type: String,
        required: true,
        unique: true,
        defaultValue: "UnCategorized"
    },
    urlParamName:{
        type: String,
        require: true,
        unique: true,
        defaultValue: "unCategorized"
    },
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
},{
    versionKey: false, timestamps: true
})

export default mongoose.model("Category", categorySchema)