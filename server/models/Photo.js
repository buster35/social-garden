const { Schema, model } = require("mongoose");
// const postSchema = require("./Post");

const photoSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    // postId: {
    //   type: String,
    //   required: true,
    // },
    // userId: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

Photo = model("Photo", photoSchema);
module.exports = Photo;
