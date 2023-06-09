const mongoose = require('mongoose');

// the object passed as the second parameter avoids deprecation warnings
// it is not required in mongoose version 6 or later but it is recommended
const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}


module.exports = connectDB;
