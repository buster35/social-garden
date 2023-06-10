// const { createReaction, removeReaction } = require('../../../../homework/Module 18 Homework/controllers/thought-controller');
const { Post } = require("../models");

// FYI: The user's password is encrypted at the model level

module.exports = {
  async createPost({ body, params }, res) {
    // console.log({ body })
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dateFormat = () => {
      const d = new Date();
      let hours = d.getHours();
      let ampm = hours >= 12 ? "pm" : "am";
      return `Posted on ${days[d.getDay()]}, ${
        months[d.getMonth()]
      } ${d.getDate()} at ${d.getHours()}:${d.getMinutes()}${ampm}`;
    };

    try {
      const post = await Post.create({
        post: body.post,
        userId: body.userId,
        username: body.username,
        currDate: dateFormat(),
      });
      // console.log(post);
      return res.status(200).json({ status: "success", payload: post });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        msg: `Error creating Post Item: ${err.message}`,
      });
    }
  },

  async getAllPosts({ body, params }, res) {
    try {
      const posts = await Post.find();
      return res
        .status(200)
        .json({ status: "success", payload: posts.reverse() });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        status: "error",
        msg: `Error retrieving Post Items: ${err.message}`,
      });
    }
  },
  async getUserPosts({ body, params }, res) {
    try {
      const posts = await Post.find({ userId: params.userId });
      return res
        .status(200)
        .json({ status: "success", payload: posts.reverse() });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        status: "error",
        msg: `Error retrieving Post Items: ${err.message}`,
      });
    }
  },
  async getOnePost({ params }, res) {
    try {
      const post = await PostItem.findOne({ _id: params.id });
      return res.status(200).json({ status: "success", payload: post });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        msg: `Error retrieving Post Item: ${err.message}`,
      });
    }
  },

  async updatePost({ body, params }, res) {
    try {
      const post = await PostItem.findOneAndUpdate(
        { _id: params.id },
        { item: body.item },
        { new: true }
      );
      return res.status(200).json({ status: "success", payload: post });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        status: "error",
        msg: `Error updating Post Item: ${err.message}`,
      });
    }
  },

  async deleteOnePost({ params }, res) {
    try {
      const todo = await PostItem.findOneAndRemove({ _id: params.id });
      return res.status(200).json({ status: "success", payload: todo });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        msg: `Error removing Post Item: ${err.message}`,
      });
    }
  },

  async createReaction(req, res) {
    try {
      const post = await PostItem.findOneAndUpdate(
        { _id: req.params.postId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!post) {
        res.json(post);
      }
    } catch (err) {
      res.json(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const post = await PostItem.findOne({ _id: req.params.postId });
      if (!post) {
        res.status(404).json({ message: "No thought found with that ID" });
      } else {
        post.reaction.pull({ _id: req.body.reactionId });
      }
    } catch (err) {
      res.json(500).json(err);
    }
  },
};
