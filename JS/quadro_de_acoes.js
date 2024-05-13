import db from "../Servidor/db.mjs";

const params = new URLSearchParams(window.location.search);
const indicador=params.get('indicador')

document.querySelector('.titulo_header').innerHTML=indicador

