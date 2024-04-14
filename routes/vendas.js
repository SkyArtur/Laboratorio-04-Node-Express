const express = require('express')
const database = require('../database').connect()
const router = express.Router()

router.get('/', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_vendas();')
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.get('/:nome', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_vendas($1);', [req.params.nome])
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.post('/', (req, res) => {
    database.setQuery(
        'SELECT * FROM registrar_venda(_produto := $1, _quantidade := $2, desconto := $3);',
        [req.body.produto, req.body.quantidade, req.body.desconto]
    )
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

module.exports = router