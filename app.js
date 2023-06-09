require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const task = require('./routes/tasks')

// custom middleware
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/error-handler')

/*  This function is used to connect to a MongoDB database using the `mongoose`
library. */

const connectDB = require('./db/connect')

app.use(express.static('./public'))
// used to parse the body of the request which is in json format
app.use(express.json())

// use the task router
/* `app.use('/api/v1/tasks', task)` is mounting the `task` router on the `/api/v1/tasks` route. This means that any requests that start with `/api/v1/tasks` will be handled by the `task` router. */

app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandler)


/**
 * This function starts the server and connects to a MongoDB database.
 */
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

/* `start()` is a function that starts the server and connects to a MongoDB database. It first calls
the `connectDB()` function to connect to the database using the `MONGO_URI` environment variable. If
the connection is successful, it starts the server by calling the `listen()` method on the `app`
object, passing in the `PORT` environment variable. If there is an error connecting to the database,
it logs the error to the console. */

start()