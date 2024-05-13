import db from "../Servidor/db.mjs";

const params = new URLSearchParams(window.location.search);
const acao=params.get('titulo')

document.querySelector('.titulo_header').innerHTML=acao

const lista_acoes = db.quadro_de_acoes_media_itens_cesta

lista_acoes.forEach(function(acao){
    if(acao.titulo==document.querySelector('.titulo_header').innerHTML){
        document.querySelector('.texto').innerHTML=acao.texto
        popular_treinamentos(acao.links)
    }
})

function popular_treinamentos(links){
    links.forEach(function(treinamento){
        criar_treinamentos(treinamento)
    })
}

function criar_treinamentos(treinamento){
    const link=document.createElement('button')
    link.innerHTML=treinamento.titulo_link
    link.addEventListener('click',()=>{
        console.log(treinamento.link)
        const main = document.querySelector('main')
        document.querySelector(".texto").innerHTML=""

        const slide=document.createElement('iframe')
        slide.src=treinamento.link
        slide.width="100%"
        slide.height="90%"
        slide.allowFullscreen="true"
        main.appendChild(slide)
    })
    document.querySelector('footer').appendChild(link)
}