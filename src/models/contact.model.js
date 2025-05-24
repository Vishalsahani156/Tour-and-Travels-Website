import mongoose, { Schema } from "mongoose";
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,

    },
    email: {
        type: String,
        required: true,
        toLowor: true,

    },
    number: {
        type: Number,
        required: true,

    },
    subject: {
        type: String,
        require:true,
    },
    message: {
        type: String,
        // required: true,
    },
}, {

    timestamps: true

})
export const Contact = mongoose.model("Contact", contactSchema)