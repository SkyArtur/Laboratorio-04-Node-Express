module.exports = app => {
    app.route('/')
        .get(app.middleware.home.home)

    app.route('/estoque')
        .get(app.middleware.stock.fetchAll)
        .post(app.middleware.stock.save)
    app.route('/estoque/:nome')
        .get(app.middleware.stock.fetchOne)
        .put(app.middleware.stock.update)

    app.route('/produtos')
        .get(app.middleware.products.fetchAll)
    app.route('/produtos/:nome')
        .get(app.middleware.products.fetchOne)

    app.route('/vendas')
        .get(app.middleware.sales.fetchAll)
    app.route('/vendas/:nome')
        .get(app.middleware.sales.fetchOne)
        .post(app.middleware.sales.save)

}
