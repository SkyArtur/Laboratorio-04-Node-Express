const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
    }
}

test('Testando o verbo GET na URI /produtos', async () => {
    const data = await fetch('http://localhost:3000/produtos', options)
        .then(r => r.json())
        .catch(err => err)
    expect(typeof data === 'object').toBeTruthy()
})

test('Testando o verbo GET na URI /produtos/abacate/', async () => {
    let data = await fetch('http://localhost:3000/produtos/abacate/', options)
        .then(r => r.json())
        .catch(err => err);
    expect(data.map(e => e['produto'])).toContain('abacate')
})

test('Testando o verbo GET na URI /estoque/', async () => {
    let data = await fetch('http://localhost:3000/estoque/', options)
        .then(r => r.json())
        .catch(err => err);
    expect(data).toBeTruthy()
})

test('Testando o verbo GET na URI /estoque/abacate/', async () => {
    let data = await fetch('http://localhost:3000/estoque/abacate/', options)
        .then(r => r.json())
        .catch(err => err);
    expect(data.map(e => e['produto'])).toContain('abacate')
})

test('Testando o verbo GET na URI /vendas/', async () => {
    let data = await fetch('http://localhost:3000/vendas/', options)
        .then(r => r.json())
        .catch(err => err);
    expect(data).toBeTruthy()
})

test('Testando o verbo GET na URI /vendas/abacate/', async () => {
    let data = await fetch('http://localhost:3000/vendas/abacate/', options)
        .then(r => r.json())
        .catch(err => err);
    expect(data.map(e => e['produto'])).toContain('abacate')
})