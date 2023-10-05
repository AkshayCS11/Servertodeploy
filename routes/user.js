import express from "express";
const router = express.Router();

import { signin, signup, activate, forgotPassword, resetPassword } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/activate", activate);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

export default router;