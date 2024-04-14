const express = require('express')
const database = require('../database').connect()
const router = express.Router()

router.get('/', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_produto_para_venda();')
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.get('/:nome', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_produto_para_venda($1);', [req.params.nome])
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})


module.exports = router