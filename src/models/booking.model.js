import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    placeName:{
        type: String,
        required: true,
    },
    numberGest: {
        type: Number,
        required: true,
        index: true,
    },
    dateArraival: {
        type: String,
        required: true,
    },
    dateLeaving: {
        type: String,
        required: true,

    },
})
export const Booking = mongoose.model("Booking", bookingSchema)