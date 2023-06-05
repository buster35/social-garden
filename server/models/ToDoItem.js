const { Schema, model } = require('mongoose');

const toDoSchema = new Schema({
  item: { 
    type: String, 
    required: true 
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});


const ToDo = model('ToDo', toDoSchema);
module.exports = ToDo;
