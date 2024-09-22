import { Router } from "express";
import { login, signIn, signUp } from "../controllers/user.controller.js";

const router = Router();

router.post('/signup',signUp);
router.post('/login',signIn);

export default router;