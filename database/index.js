const {Client} = require("pg");
require('dotenv').config()


class Connector {
    constructor(params) {
        this.params = params ?? {connectionString: process.env.CONNECTION_STRING_DEVELOPMENT}
    }
    async execute(query) {
        const client = new Client(this.params)
        try {
            await client.connect()
            const response = await client.query(query)
            return new Promise((resolve, reject) => {
                try {
                    resolve(response.rows)
                } catch (e) {
                    reject(e)
                }
            })
        } catch (e) {
            return e
        } finally {
            await client.end()
        }
    }
}

module.exports = (() => {
    let instance
    function create_instance(params) {
        return new Connector(params)
    }
    return {
        connector: function (params) {
            if (!instance) {
                instance = create_instance(params)
            }
            return instance
        }
    }
})()


