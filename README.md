# Laboratório 04 - Criando uma API com express JS.

<hr />

Chegamos a um momento em que temos um banco de dados e um método para nos conectarmos com esse banco de dados. Agora, 
que tal criarmos uma aplicação para manipularmos este banco de dados? Melhor ainda, vamos criar uma interface de programação
de aplicações (API). 

## O que é uma API (Application Programming Interface)

Uma API nada mais é do que uma tecnologia de comunicação entre sistemas. Ela permite que componentes diferentes de um 
sistema computacional compartilhem recursos, dados ou dispositivos. Pense na câmera do seu celular, ela é apenas um dos 
muitos elementos I/O do seu smartphone. Diversos softwares dentro do seu celular podem acessar a câmera por meio de uma API. 
O software da câmera, o WhatsApp e outros que precisarem acessar este componente dentro do sistema não precisam 
conhecer o dispositivo da câmera em si, mas a aplicação que permite a comunicação com ela.

Isso acontece porque a API padroniza a comunicação entre os programas e o sistema ou serviço. Desta forma, as aplicações 
somente precisam seguir os padrões da API sem se preocupar com os detalhes técnicos subjacentes, facilitando e agilizando 
o seu desenvolvimento.

Vamos retornar ao nosso exemplo do smartphone. Existem muitos fabricantes destes dispositivos que utilizam câmeras de 
outros fabricantes diferentes e com capacidades diferentes. Mas todos esses dispositivos diferentes compartilham o mesmo 
sistema operacional que possui uma mesma API, a qual possui as funcionalidades específicas de comunicação com esses 
diferentes dispositivos. A sua aplicação, então, só precisa conhecer as regras de comunicação com esta API para conseguir 
funcionar corretamente em todos os diferentes smartphones.

Viu!? Não é tão complicado assim. 

Uma API é como uma ponte. Ela possui algumas regras, como limite de peso, sentido obrigatório de ida e volta, talvez até 
uma cancela, controlando quem pode ou não atravessar. Mas, desde que você obedeça às regras, você poderá atravessá-la e 
chegar ao outro lado. :smile:

## Agora, que tal botarmos a mão na massa.

Nossa aplicação será bem simples. Vamos utilizar o framework Express.js &copy; para realizarmos as nossas requisições
HTTP e com elas, disponibilizar os dados armazenados em nosso bando de dados. Primeiramente, vamos trazer o nosso 
connector, desenvolvido no laboratório anterior, para a raiz do nosso projeto. Vamos renomear o diretório de
*connector* para *database*. Também vamos precisar do nosso arquivo ".env" com os dados de conexão com o banco de dados.

Vamos realizar as instalações necessárias com o comando:
```shell
npm i express http body-parser pg dotenv
```
Após as instalações das dependências do nosso projeto, vamos começar criando o nosso app  e consequentemente,
a estrutura de diretórios do nosso projeto. Vamos iniciar com o nosso arquivo 'index.html' na raiz do nosso projeto.
```html
<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>API Node JS</title>
    </head>
    <body class="container">
        <div class="title">
            <h1>API Produtos</h1>
        </div>
        <div class="links">
            <a href="/produtos">http://localhost:3000/produtos</a>
            <a href="/estoque">http://localhost:3000/estoque</a>
            <a href="/vendas">http://localhost:3000/vendas</a>
        </div>
    </body>
</html>
```
Não há muito o que falar sobre ele. São apenas 3 links básicos. Também vamos acrescentar um arquivo style.css em um diretório
chamado *public*.
```css
*,*::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", sans-serif;
}
.container {
    width: 100vw;
    height: 100vh;
    background-color: #242c2f;
}
.title {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c1a168;
    border-bottom: 2px white solid;
}
.links{
    display: flex;
    flex-direction: column;
    padding: 25px;
    line-height: 45px;
}
a {
    text-decoration: none;
    color: orangered;
    font-size: 1.2em;
}
a:visited {
    color: orange;
}
a:hover {
    text-decoration: underline;
}
```
Também não há nada de muito elaborado em nossa folha de estilo. O foco no nosso projeto é simplesmente fornece uma API de 
acesso ao nosso banco de dados via rede e esta página servirá apenas como auxíliar.

```javascript
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


const routerIndex = require('./routes/index')
const routerEstoque = require("./routes/estoques");
const routerProdutos = require("./produtos");
const routerVendas = require("./vendas");

app.use('/', routerIndex)
app.use('/estoque', routerEstoque)
app.use('/produtos', routerProdutos)
app.use('/vendas', routerVendas)

module.exports = app
```



![arvore_diretorios.png](assets%2Farvore_diretorios.png)

<hr/>

Laboratórios:

[Laboratório 01 - Trabalhando com PostgreSQL e PL/pgSQL.](https://github.com/SkyArtur/Laboratorio-01-PLpgSQL)

[Laboratório 02 - Conectando com o banco de dados.](https://github.com/SkyArtur/Laboratorio-02-Python)

[Laboratório 03 - Conectando com o banco de dados com Node JS.](https://github.com/SkyArtur/Laboratorio-03-Node)

<hr/>