const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    // Should we use fname lname or just username? Should decide with the group
    username: { 
      type: String, 
      required: true 
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    friend: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.method("verify", async function(pw){
  return await bcrypt.compare(pw, this.password)
})

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10)
})

const User = model('User', userSchema);
module.exports = User;
