import mongoose from "mongoose";

// Configurations for user model.
const UserSchema = new mongoose.Schema({
   firstName: {
      type: String,
      requried: true,
      min: 2,
      max: 50
   },
   lastName: {
      type: String,
      requried: true,
      min: 2,
      max: 50
   },
   email: {
      type: String,
      requried: true,
      unique: true,
      max: 50
   },
   password: {
      type: String,
      requried: true,
      min: 8
   },
   picturePath: {
      type: String,
      default: ""
   },
   friends: {
      type: Array,
      default: []
   },
   location: String,
   occupation: String,
   viewedProfile: Number,
   impressions: Number

}, { timestamps: true })

const User = mongoose.model("User", UserSchema)
export default User