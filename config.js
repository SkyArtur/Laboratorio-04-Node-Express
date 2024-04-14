const database = require("./database").connect()
const fs = require("fs")
const path = require("path")

function run() {
    database.setQuery(
        fs.readFileSync(
            path.join(__dirname, 'sql/config_database.sql'),
            'utf-8'
        )
    )
    database.execute()
        .then(console.log)
        .catch(console.error)
}

run()
