import db from "../Servidor/db.mjs"

let lista_indicadores=db.dados_indicador

lista_indicadores.sort(function(a, b) {
    if(a.valor < b.valor) {
      return -1;
    } else {
      return true;
    }
  });

function criar_indicador(info_indicador){

    const botao_indicador=document.createElement('button')
    botao_indicador.classList.add('botao_indicador')
    botao_indicador.classList.add('botao_2')

    if(info_indicador.valor<0){
        botao_indicador.style.borderColor='var(--vermelho)'
    }

    const valor_botao_indicador=document.createElement('h1')
    valor_botao_indicador.classList.add('titulo')
    valor_botao_indicador.innerHTML=info_indicador.valor+'%'

    const nome_botao_indicador=document.createElement('h2')
    nome_botao_indicador.classList.add('subtitulo')
    nome_botao_indicador.innerHTML=info_indicador.nome

    botao_indicador.appendChild(valor_botao_indicador)
    botao_indicador.appendChild(nome_botao_indicador)

    document.querySelector('.lista_indicadores').appendChild(botao_indicador)
    botao_indicador.addEventListener('click',()=>{window.location.href=`quadro_de_acoes.html?indicador=${info_indicador.nome}`})
    
}

lista_indicadores.forEach(function(info){
    criar_indicador(info)
})

const grupo_loja=localStorage.getItem("grupo")
document.querySelector(".titulo_header").innerHTML=`Super Show ${grupo_loja}`