import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Comma added here
    },
    email: {
        type: String,
        required: true,
        unique: true, // Comma added here
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }

}, { timestamps: true }); // Enable timestamps

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;