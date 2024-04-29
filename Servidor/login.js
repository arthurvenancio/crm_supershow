import db from "./db.mjs"

const form_login = document.querySelector("#login_form")


form_login.addEventListener('submit',(formulario)=>{
    formulario.preventDefault()

    const username=document.querySelector('#usuario').value
    const password=document.querySelector('#senha').value
    
    verificar_usuario(username,password)
})

function verificar_usuario(username,password) {
    db.usuarios.forEach((usuario)=>{
        if(usuario.login==username && usuario.senha==password){
            return window.location.href="../HTML/indicadores.html"
        }
    })
}