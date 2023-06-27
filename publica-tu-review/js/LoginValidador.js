function login(){
    sessionStorage.removeItem('logueado');
    sessionStorage.removeItem('userName');
    let form = document.getElementById('formReview');
    form.addEventListener('submit',e => {
        e.preventDefault();
        let usuario = document.getElementById("usuario").value;
        let contrasena = document.getElementById("contrasena").value;
        if ((usuario === 'vairo') && (contrasena === '1234') || 
        (usuario === 'cris') && (contrasena === '1234') ||
        (usuario === 'paola') && (contrasena === '1234')){
            sessionStorage.setItem('logueado',true);
            sessionStorage.setItem('userName',usuario);
            window.location.reload();
        } else {
            sessionStorage.setItem('logueado',false);
            document.getElementById('warning').innerHTML=`Error: Usuario/Contraseña incorrectos`;
            //no funciona, arreglar estructurandolo igual que el validador de review, con eventlistener submit y preventdefault?;
        }

    })
}

function logout(){
    sessionStorage.removeItem('logueado');
    sessionStorage.removeItem('userName');
}