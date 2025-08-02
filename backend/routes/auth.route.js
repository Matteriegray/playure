import express from "express"
import { logIn, signUp } from "../controllers/auth.controller.js"

const auth_router = express.Router()

auth_router.post("/login", logIn)
auth_router.post("/signup/athlete", signUp)
auth_router.post("/signup/coach", signUp)

export default auth_router