const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reaction: {
      type: String,
      required: true,
      maxlength: 50,
      default: 'User reaction'
    },
    currentDate: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

module.exports = reactionSchema;