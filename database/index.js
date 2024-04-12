const Connection = require('./object')
require('dotenv').config()


const params = null

module.exports = (() => {
    let instance
    function create_instance() {
        return new Connection(params ?? {connectionString: process.env.CONNECTION_STRING})
    }
    return {
        connect: function () {
            if (!instance) {
                instance = create_instance()
            }
            return instance
        }
    }
})()

