import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Booking } from "../models/booking.model.js";

const bookingUser = asyncHandler(async (req, res) => {
    const { placeName, numberGest, dateArraival, dateLeaving } = req.body
    if (!placeName && !numberGest && !dateArraival && !dateLeaving) {
        throw new ApiError(400, "All fields are required")
    }
    const bookingExist = await Booking.findOne({
        $or: [{ placeName }, { numberGest }, { dateArraival }, { dateLeaving }]
    })
    if (bookingExist) {
        throw new ApiError(402, "Booking already exists")
    }
    const bookingApprov = await Booking.create({
        placeName,
        numberGest,
        dateArraival,
        dateLeaving
    })
    return res.status(201).json(
        new ApiResponse(200, bookingApprov, "your appoiment is booking")
    )
})

export { bookingUser };
