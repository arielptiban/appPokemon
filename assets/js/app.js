

    let button = document.querySelector('button')

    // if (correo.value === 'arielptiban@gmail.com') {

    // } else {

    //     button.addEventListener('click', () => {
    //         correo.style.boxShadow = '0 0 10px red'
    //         contrasena.style.boxShadow = '0 0 10px red'
    //     });
    // }


    button.addEventListener('click', inicio)
    button.addEventListener('click',validar)

    function inicio(){
        
    }

    function validar(){

        const correo = document.getElementById('correo');
        const contrasena = document.getElementById('contrasena');

        if(correo.value === 'arielptiban@gmail.com' && contrasena.value === '123'){

            correo.style.boxShadow = '0 0 10px green'
            contrasena.style.boxShadow = '0 0 10px green'

            sessionStorage.setItem("usuario", "GrupoWeb");
        }
        else{

            correo.focus()
            correo.style.boxShadow = '0 0 10px red'
            contrasena.style.boxShadow = '0 0 10px red'
        }
    }