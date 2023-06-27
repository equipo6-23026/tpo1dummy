let tituloActual=0;
function novedadesController(movimiento,actual=tituloActual){
    masNuevos('../database.json',3).then(array => insertarTitulo(array,actual,movimiento))
    .then(e=>{
        tituloActual=e[0];
        let titulo = document.getElementById('titulo');
        let portada = document.getElementById('portada-highlight');
        let cajaReviews = document.getElementById('caja-reviews');
        portada.setAttribute("src",``);
        titulo.innerHTML=`${e[1].titulo}`;
        portada.setAttribute("alt",`Captura de pantalla de ${e[1].titulo}`);
        portada.setAttribute("src",`${e[1].portada}`);
        cajaReviews.innerHTML=``
        for (usuario in e[1].reviews){
            cajaReviews.innerHTML=`${cajaReviews.innerHTML}
            <p class="review">
                <br><span class="username">${usuario}</span> : ${e[1].reviews[usuario]}
            </p>`;
        }
    })
}
window.addEventListener('load',novedadesController(movimiento=0))