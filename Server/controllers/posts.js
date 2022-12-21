const { default: mongoose } = require("mongoose");
const PostMessage = require("../model/postMessage");

// ============================ GET ALL THE POSTS =========================

const getAllPosts = async (req, res) => {
  try {
    const post = await PostMessage.find({});
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// ============================ UPDATE THE POST ===========================

const updatePost = async (req, res) => {
  const { id, _id } = req.params;

  if (!mongoose.isValidObjectId(_id))
    return res.status(404).send("id not valid");

  try {
    const new_post = { ...req.body, _id };
    const post = await PostMessage.findByIdAndUpdate(_id, new_post, {
      new: true,
    });
    res.status(200).send({ post });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// ============================ DELETE THE POST ===========================

const deletePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await PostMessage.findOneAndDelete({ _id: postId });

    if (!post) {
      res.status(404).send("id not valid");
    }

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// ============================ CREATE THE POST ===========================

const createPost = async (req, res) => {
  try {
    const post = await PostMessage.create(req.body);
    res.status(200).send({ post });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// ============================ EXPORT THE MODUELES =======================

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
};
