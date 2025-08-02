import genToken from "../config/genToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body

        if (!firstname || !lastname || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPass
        })

        const token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            // sameSite & secure
        })

        return res.status(200).json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPassCorrect = await bcrypt.compare(password, user.password)
        if (!isPassCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            // sameSite & secure
        })

        return res.status(200).json({
            message: "User logged in successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
}