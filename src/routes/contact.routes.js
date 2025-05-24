import { contactUser } from "../controllers/contact.controller.js"
import { Router } from "express"

const router = Router();
router.route("/contactInfo").post(contactUser);

export default router
