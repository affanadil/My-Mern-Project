

import express from "express";
import { signin, signup, google, signOut } from "../controllers/auth.controller.js"; // Assuming SignUp is exported


const router = express.Router(); // Create the Express app

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/google",google);
router.get("/signout",signOut);

export  default router; // Export the router