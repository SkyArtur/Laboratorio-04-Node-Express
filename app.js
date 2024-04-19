const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const db = require("./database");
const consign = require("consign");
const app = express()
const port = normalizaPort(process.env.PORT || 3000)


app.db = db.connector()
app.set('port', port)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

function normalizaPort(value) {
    let port = value
    if (isNaN(port)) return value
    if (port >= 0) return port
    return false
}

consign()
    .then('./middleware')
    .then('./routes')
    .into(app)

module.exports = { app, port }
