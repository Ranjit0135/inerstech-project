import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: 'string',
        required: [true, "please enter your id"],
    },
    name: {
        type: 'string',
        required: [true, "please enter your name"],
    },
    email: {
        type: 'string',
        unique: [true, "Email already exists"],
        required: [true, "please enter your email"],
        validate: validator.default.isEmail,
    },
    photo: {
        type: 'string',
        required: [true, "please add photo"],
    },
    role: {
        type: 'string',
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: 'string',
        enum: ["male", "female"],
        required: [true, "please enter your gender"],
    },
    dob: {
        type: Date,
        required: [true, "please enter your birth date"],
    },
}, {
    timestamps: true,
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) {
        age--;
    }
});
export const User = mongoose.model('User', schema);
