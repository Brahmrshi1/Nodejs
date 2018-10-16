const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  }, 
  createdOn: {
    date: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);