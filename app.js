const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


const routerIndex = require('./routes/index')
const routerEstoque = require("./routes/estoques");
const routerProdutos = require("./routes/produtos");
const routerVendas = require("./routes/vendas");

app.use('/', routerIndex)
app.use('/estoque', routerEstoque)
app.use('/produtos', routerProdutos)
app.use('/vendas', routerVendas)

module.exports = app
