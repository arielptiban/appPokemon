

    let button = document.querySelector('button')

    button.addEventListener('click', inicio)

    function inicio(){

        const correo = document.getElementById('correo');
        const contrasena = document.getElementById('contrasena');

        if(correo.value === 'arielptiban@gmail.com' && contrasena.value === '123'){

            correo.style.boxShadow = '0 0 10px green'
            contrasena.style.boxShadow = '0 0 10px green'

            sessionStorage.setItem("usuario", "arielptiban@gmail.com");
            window.location.href = './dashboard.html'

        }
        else{

            correo.focus()
            correo.style.boxShadow = '0 0 10px red'
            contrasena.style.boxShadow = '0 0 10px red'
        }
    }