const Task = require('../models/taskModel')
const asyncWrapper = require('../middlewares/async')

const { createCustomError } = require('../errors/custom-error')


/* `const getAllTasks` is a function that uses `asyncWrapper` middleware to handle any errors that may
occur during the execution of the function. It retrieves all tasks from the database using
`Task.find({})` and returns them as a JSON response with a status code of 200. If an error occurs,
it returns a JSON response with a status code of 500 and an error message. */

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

/* `const createTask` is a function that creates a new task in the database by using the
`Task.create()` method with the request body as the argument. It then sends a JSON response with a
status code of 201 and the newly created task as the response body. The function is wrapped in the
`asyncWrapper` middleware to handle any errors that may occur during the execution of the function. */
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

/* `const getTask` is a function that retrieves a single task from the database by using the
`Task.findOne()` method with the task ID from the request parameters. If the task is not found, it
returns a custom error using the `createCustomError()` function with a status code of 404. If the
task is found, it sends a JSON response with a status code of 200 and the task as the response body.
The function is wrapped in the `asyncWrapper` middleware to handle any errors that may occur during
the execution of the function. */
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

/* `const deleteTask` is a function that deletes a single task from the database by using the
`Task.findOneAndDelete()` method with the task ID from the request parameters. If the task is not
found, it returns a custom error using the `createCustomError()` function with a status code of 404.
If the task is found and deleted successfully, it sends a JSON response with a status code of 200
and the deleted task as the response body. The function is wrapped in the `asyncWrapper` middleware
to handle any errors that may occur during the execution of the function. */
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })

})

/* `const updateTask` is a function that updates a single task in the database by using the
`Task.findByIdAndUpdate()` method with the task ID from the request parameters. It takes in the
request and response objects as arguments and uses the `asyncWrapper` middleware to handle any
errors that may occur during the execution of the function. */
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }