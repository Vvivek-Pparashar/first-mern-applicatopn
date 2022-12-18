const PostMessage = require("../model/postMessage");

// ============================ GET ALL THE POSTS =========================

const getAllPosts = async (req, res) => {
  try {
    const post = await PostMessage.find({});
    res.status(200).send(post);
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// ============================ UPDATE THE POST ===========================

const updatePost = async (req, res) => {
  try {
    const post = await PostMessage.create(req.body);
    res.status(200).send({ post });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// ============================ DELETE THE POST ===========================

const deletePost = (req, res) => {
  res.send("vivek is gr8 post deleted");
};

// ============================ CREATE THE POST ===========================

const createPost = async (req, res) => {
  try {
    const post = await PostMessage.create(req.body);
    res.status(200).send({ post });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// ============================ EXPORT THE MODUELES =======================

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
};
