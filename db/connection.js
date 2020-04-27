const mongoose = require('mongoose')

const connectionString = process.env.mongodb_uri || 'mongodb://localhost/mehn-diagnostic-exercise'

mongoose.connect(connectionString)
    .then(() => {
        console.log(`Connected to mongo successfully`)
    })
    .catch((error) => {
        console.log(`failed to connect to mongo`)
        console.log(error)
    })

module.exports = mongoose