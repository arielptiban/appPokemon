
if(!sessionStorage.getItem('usuario')){
    location.href = 'index.html';
}

let salir = document.getElementById('salir')

salir.addEventListener('click', cerrar);

function cerrar(){

    sessionStorage.removeItem('usuario')
    location.href("./index.html")
    

}