const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "must provide title to your company"],
    maxlength: [30, "title cant ba of more than 20 words"],
  },

  message: {
    type: String,
    trim: true,
    required: [true, "must provide message to your company"],
    maxlength: [300, "title cant ba of more than 20 words"],
  },

  owner: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
