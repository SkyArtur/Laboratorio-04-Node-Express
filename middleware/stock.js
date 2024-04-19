module.exports = app => {
    const fetchAll = async (req, res) => {
        app.db.execute('SELECT * FROM selecionar_produto_em_estoque();')
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }
    const fetchOne = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM selecionar_produto_em_estoque($1);',
            values: [req.params.nome]
        }).then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const save = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM registrar_produto_no_estoque($1, $2, $3, $4, $5);',
            values: [req.body.produto, req.body.quantidade, req.body.custo, req.body.lucro, req.body.data]
        }).then(result => res.status(201).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const update = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM atualizar_dados_estoque_e_produto($1, $2, $3, $4);',
            values: [req.params.nome, req.body.quantidade, req.body.custo, req.body.lucro]
        }).then(result => res.status(202).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    const remove = async (req, res) => {
        app.db.execute({
            text: 'SELECT * FROM deletar_produto($1);',
            values: [req.params.nome]
        }).then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({error: error.message}))
    }

    return { fetchOne, fetchAll, save, update, remove }

}
