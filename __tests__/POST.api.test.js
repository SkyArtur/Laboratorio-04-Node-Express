const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        produto: 'Pitangas',
        quantidade: 1500,
        custo: 955.65,
        lucro: 45,
        data: '2024-04-11'
    })
}



test('Testando o verbo POST na URI /estoques', async () => {
    const data = await fetch('http://localhost:3000/estoque/', options)
        .then(r => {
            if (!r.ok) return r.status
            return r.json()
        })
        .catch(err => err)
    expect(data.forEach(e => e["registrar_produto_no_estoque"])).toBeFalsy()
})