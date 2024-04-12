const express = require('express')
const database = require('../database').connect()
const router = express.Router()

router.get('/', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_vendas();')
    database.execute()
        .then(result => res.json(result))
})

router.get('/:nome', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_vendas($1);', [req.params.nome])
    database.execute()
        .then(result => res.json(result))
})


module.exports = router