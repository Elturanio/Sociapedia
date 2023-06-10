import mongoose from "mongoose";

const postSchema = mongoose.Schema({
   userId: {
      type: String,
      requried: true
   },
   firstName: {
      type: String,
      requried: true,
   },
   lastName: {
      type: String,
      requried: true,
   },
   location: String,
   description: String,
   picturePath: String,
   userPicturePath: String,
   likes: {
      type: Map,
      of: Boolean
   },
   comments: {
      type: Array,
      default: []
   },
}, { timestamp: true }
);

const Post = mongoose.model("Post", postSchema)

export default Post