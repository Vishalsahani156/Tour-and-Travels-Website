import { Router } from "express";
import { bookingUser } from "../controllers/booking.controller.js";

const router = Router()
router.route("/booking").post(bookingUser)

export default router
// import { Router } from "express";