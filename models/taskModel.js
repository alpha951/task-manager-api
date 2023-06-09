const mongoose = require('mongoose');

/* This code is defining a Mongoose schema for a task object. The schema has two properties: "name" and
"completed". "name" is a required string with a maximum length of 50 characters and "completed" is a
boolean with a default value of false. This schema will be used to create a Mongoose model for
tasks. */
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [50, 'name cannot be more than 50 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

/* `module.exports` is a special object in Node.js that is used to define what a module exports when it
is required in another file. In this case, `mongoose.model('Task', TaskSchema)` creates a Mongoose
model for tasks using the `TaskSchema` schema, and `module.exports` is used to export this model so
that it can be used in other files. This allows other files to access and use the `Task` model to
perform CRUD (Create, Read, Update, Delete) operations on tasks in a MongoDB database. */

module.exports = mongoose.model('Task', TaskSchema)