const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const postSchema = new Schema({
    post: { 
      type: String, 
      required: true 
    },
    username: {
      type: String,
      required: true
    },
    currentDate: {
      type: Date,
      default: Date.now()
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    // Thinking of adding on a way to differentiate different kinds of posts. We may or may not want this.
    flair: {
      type: String,
      required: false
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);


const Post = model('Post', postSchema);
module.exports = Post;
