const express = require('express')
const database = require('../database').connect()
const router = express.Router()

router.get('/', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_produto_em_estoque();')
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.get('/:nome', (req, res) => {
    database.setQuery('SELECT * FROM selecionar_produto_em_estoque($1);', [req.params.nome])
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.post('/', (req, res) => {
    database.setQuery(
        'SELECT * FROM registrar_produto_no_estoque($1, $2, $3, $4, $5);',
        [req.body.produto, req.body.quantidade, req.body.custo, req.body.lucro, req.body.data]
    )
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})
router.put('/:nome', (req, res) => {
    database.setQuery(
        'SELECT * FROM atualizar_dados_estoque_e_produto($1, $2, $3, $4);',
        [req.params.nome, req.body.quantidade, req.body.custo, req.body.lucro]
    )
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

router.delete('/:nome', (req, res) => {
    database.setQuery('SELECT * FROM deletar_produto($1);', [req.params.nome])
    database.execute()
        .then(result => res.json(result))
        .catch(console.error)
})

module.exports = router