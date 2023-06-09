const notFound = (req, res, next) => {
    res.status(404).json({ msg: `Route Not Found ${req.originalUrl}` })
}

module.exports = notFound