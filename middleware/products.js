module.exports = app => {
    const fetchAll = async (req, res) => {
        app.db.execute('SELECT * FROM selecionar_produto_para_venda();')
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const fetchOne = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM selecionar_produto_para_venda($1);',
            values: [req.params.nome]
        }).then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    return { fetchAll, fetchOne }
}
