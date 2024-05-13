
const dados_indicador=[{
    nome:"Média de Itens na Cesta",
    valor:0
},
{
    nome:"Valor Médio de Itens na Cesta",
    valor:10
},
{
    nome:"Clientes Únicos",
    valor:-10
},{
    nome:"Visitas Médias por Cliente",
    valor:-5
}]

const associado=[{
    grupo:"Seridó",
    loja:["Abel Cabral","Coophab"]
},{
    grupo:"Maia",
    loja:["Maia Satélite","Maia Neópolis"]
},{
    grupo:"Gomes",
    loja:["Rosa dos Ventos"]
}]

const usuarios=[{
    login:"teste",
    senha:"1234",
    grupo:"Seridó"
},{
    login:"teste2",
    senha:"1234",
    grupo:"Maia"
},{
    login:"teste3",
    senha:"1234",
    grupo:"Gomes"
}]


const quadro_de_acoes_media_itens_cesta=[{
    titulo:"Oferta Leve e Pague ou Combos",
    texto:"<p>Uma forma bastante eficiente de elevar a quantidade de itens na cesta do cliente é realizar ofertas que induzam o consumidor a levar muitos produtos.</p><p>Na plataforma da mercafácil temos duas ofertas desse tipo: leve pague e combo.</p><p>Esses tipos de ofertas dão descontos para o consumidor caso ele leve vários produtos, para conhecer mais dessas ferramentas e como utilizá-las temos os dois treinamentos abaixo.</p><p>Contudo, para o sucesso da oferta é necessário que ela seja bem divulgada e que os produtos estejam bem expostos em loja.</p>",
    links:[{
        titulo_link:"Treinamento de Leve e Pague",
        link:"https://docs.google.com/presentation/d/e/2PACX-1vSknPch9vG5RXC30nIyCmNOCebZj9HE1fyUI0Ld8q3B9JMvNgIbveDcUX7XMgK9ikbomp1nK9VlF1uq/embed?start=true&loop=false&delayms=3000"
    },{
        titulo_link:"Treinamento de Combo",
        link:"https://docs.google.com/presentation/d/1vJK0PGBzeQtu0JsOSKe5nLPkrDVSHlFfY0Gl2ywNocg/edit?usp=sharing"
    }]
},{
    titulo:"Realização de Sorteio",
    texto:"<p>Um dos modelos de sorteio exige que o cliente compre uma certa quantidade de uma lista de produtos, isso pode incentivar o aumento do consumo daqueles itens, aumentando a quantidade de itens na cesta.</p><p>Para que o sorteio tenha os melhores resultados é necessário que ele seja bem divulgado.  Também é importante que não haja uma saturação de sorteios, portanto essas ações devem ser esporádicas para que tenham impacto maior sobre o consumidor.</p><p>Abaixo temos um treinamento para você entender melhor como funcionam os sorteios que são feitos através da plataforma Mercafácil.</p>",
    links:[{
        titulo_link:"Treinamento de Sorteios Mercafácil",
        link:"https://docs.google.com/presentation/d/1i-TInC75VbVD5x1RXNY4ZKwEj3Im9NG_cowfM9keltY/edit?usp=sharing"
    }]
},{
    titulo:"Realização de Ofertas Segmentada",
    texto:"<p>Para aumentar a média de itens da cesta do cliente, uma ótima forma é realizar uma oferta segmentada para o grupo de clientes que teve uma queda na média de itens na cesta recentemente. É possível averiguar essa segmentação na decomposição de faturamento.</p><p>Através da Mercafácil é possível realizar estas ofertas específicas.</p><p>Dessa forma atraindo de maneira mais agressiva o cliente. Você pode utilizar o ranqueamento de produtos da segmentação que deseja atingir para selecionar qual produto impacta mais esse grupo.</p><p>É importante que essas promoções sejam divulgadas em canais individuais como push e SMS.</p>",
    links:[{
        titulo_link:"Treinamento de Oferta Segmentada",
        link:"https://docs.google.com/presentation/d/1OoJHuv-OqBkiONQhkQG-IJGmCxE8cFDwHZULQoMnsEk/edit?usp=sharing"
    },{
        titulo_link:"Treinamento de Segmentação SMS",
        link:"https://docs.google.com/presentation/d/1ZITUoed1xURWNctoy0RCT7kv9VWE4gDLKg2kglvwUbQ/edit?usp=sharing"
    },{
        titulo_link:"Treinamento de Ranqueamento de Produtos",
        link:"https://docs.google.com/presentation/d/1cRt-qlZGPvlVgs954XbU3DlGKWQdOR-3k3KKkaOyGzo/edit?usp=sharing"
    }]
},{
    titulo:"Criação de Kits",
    texto:"<p>A forma que a loja apresenta os produtos para o cliente pode elevar o valor dos produtos para o seu consumidor, deixando aquele item mais atrativo.</p><p>Uma forma de fazer isso é a criação de kits de produtos, comumente temáticos, que trariam um valor agregado apenas pela apresentação dos itens de forma organizada e condizente com a sazonalidade.</p><p>Por exemplo, uma cesta com itens de chocolate e outros doces sendo colocada nas prateleiras na época da páscoa pode fazer o cliente levar itens que talvez ele não iria adquirir naturalmente.</p><p>É importante salientar que é importante que a criação desses kits seja vinculado à datas  festivas para que tenham um maior impacto.</p>",
    links:[{
        titulo_link:"Sem Treinamentos Adicionais",
        link:""
    }]
}]


const db={
    dados_indicador,
    associado,
    usuarios,
    quadro_de_acoes_media_itens_cesta
}
export default db