/**
 * This is a higher-order function that wraps an asynchronous function and catches any errors that may
 * occur.
 * @param fn - The `fn` parameter is a function that will be executed asynchronously within the
 * returned function. It is expected to take in three parameters: `req` (request), `res` (response),
 * and `next` (a function to pass control to the next middleware function).
 * @returns The `asyncWrapper` function returns an asynchronous function that takes in `req`, `res`,
 * and `next` as parameters. This function wraps around the `fn` function passed as an argument to
 * `asyncWrapper`. If `fn` throws an error, the error is passed to the `next` function.
 */
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = asyncWrapper;