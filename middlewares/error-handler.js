const { customAPIError } = require('../errors/custom-error')

/**
 * This is an error handling middleware function for a Node.js API that checks if the error is a custom
 * API error and returns an appropriate response, otherwise it returns a generic error message.
 * @param err - The error object that was thrown or passed to the next() function.
 * @param req - The request object represents the HTTP request that the client (e.g., web browser)
 * sends to the server. It contains information about the request, such as the URL, headers, and any
 * data that was sent in the request body.
 * @param res - "res" stands for response. It is an object that represents the HTTP response that an
 * Express app sends when it receives an HTTP request. It contains methods to set the response status,
 * headers, and body. In the context of the error handler function, "res" is used to send an HTTP
 * @param next - `next` is a function that is called to pass control to the next middleware function in
 * the stack. It is typically used to handle errors or to move on to the next middleware function in
 * the chain. If an error occurs in the current middleware function, `next` can be called with an error
 * @returns If the error is an instance of `customAPIError`, the function will return a JSON response
 * with the error message and status code provided by the error object. Otherwise, it will return a
 * generic error message with a 500 status code.
 */
const errorHnadler = (err, req, res, next) => {

    if (err instanceof customAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    res.staus(500).json({ msg: 'Something went wrong, please try again later' })
}

module.exports = errorHnadler