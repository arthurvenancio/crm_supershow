import db from "../Servidor/db.mjs"

const btn_login = document.querySelector("#login")


btn_login.addEventListener('submit',()=>{
    const username=document.querySelector('#usuario').innerHTML
    const senha=document.querySelector('#senha').innerHTML

    db.usuarios.forEach(usuarios,function(){
        if(username==usuarios.login && senha==usuarios.senha){
            return window.location.href='/HTML/indicadores.html'
        }
    })

    
})