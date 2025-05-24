import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Contact } from "../models/contact.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const contactUser = asyncHandler(async (req, res) => {
    const{ name, email, number, subject, message } = req.body

    if (!name && !email && !number && !subject && !message) {
        throw new ApiError(400, "Pleaes provide all detels")
    }
    const createContact = await Contact.create({
        name,
        email,
        number,
        subject,
        message,
    })
    if (!createContact) {
        throw new ApiError(401, "Sorry ContactUser  not create")
    }
    return res.status(200).json(
        new ApiResponse(200, createContact, "ContactUser created")
    )
})
export { contactUser }