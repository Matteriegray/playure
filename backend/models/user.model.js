import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    isCoach: {
        type: Boolean,
        default: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        default: ""
    },
    sports: [
        { type: String }
    ],

    acheivements: [
        {
            title: { type: String },
            company: { type: String },
            startDate: { type: String },
            endDate: { type: String },
            description: { type: String }
        }
    ],
    experience: [
        {
            school: { type: String },
            degree: { type: String },
            startDate: { type: String },
            endDate: { type: String },
            description: { type: String }
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
}
, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User