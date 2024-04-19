module.exports = app => {
    const fetchOne = async (req, res) => {
        app.db.execute('SELECT * FROM selecionar_vendas();')
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const fetchAll = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM selecionar_vendas($1);',
            values: [req.params.nome]
        }).then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const save = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM registrar_venda($1,  $2, $3);',
            values: [req.body.produto, req.body.quantidade, req.body.desconto]
        }).then(result => res.status(201).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    return { fetchOne, fetchAll, save }
}
