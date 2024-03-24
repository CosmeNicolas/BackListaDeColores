import mongoose from "mongoose";

const { Schema } = mongoose;

const colorSchema = new Schema({
    nombreColor:{
        type:String,
        require:true,
        minLength:3,
        maxLength:15,
        unique:true
    }
})

const Color = mongoose.model('color', colorSchema)

export default Color