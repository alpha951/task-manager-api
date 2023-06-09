/**
 * This function returns a JSON response with a "Route Not Found" message and the original URL if a
 * requested route is not found.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request method, request headers, request parameters, request body, etc. It
 * is passed as the first parameter to middleware functions in Express.js.
 * @param res - `res` is the response object that is passed to the middleware function. It is used to
 * send the response back to the client. In this case, it is used to set the status code to 404 and
 * send a JSON object with a message indicating that the requested route was not found.
 * @param next - `next` is a function that is used to pass control to the next middleware function in
 * the request-response cycle. If there are no more middleware functions left, it passes control to the
 * final handler function. In this specific code snippet, `next` is not used, but it is included as a
 */
const notFound = (req, res, next) => {
    res.status(404).json({ msg: `Route Not Found ${req.originalUrl}` })
}

module.exports = notFound