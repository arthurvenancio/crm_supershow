
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
}]
const db={
    dados_indicador,
    associado,
    usuarios
}

export default db