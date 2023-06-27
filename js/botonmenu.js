var boton = document.getElementById("boton-hamburguesa");
var contenedorEnlaces = document.getElementById("contenedor-enlaces");
var menuIconAbrir  = document.getElementById("icono-menu-abrir");
var menuIconCerrar = document.getElementById("icono-menu-cerrar");

boton.addEventListener("click", function (){
    if (contenedorEnlaces.classList.contains("contenedor-enlaces--oculto")){
        contenedorEnlaces.classList.remove("contenedor-enlaces--oculto");
        menuIconAbrir.classList.add("icono-menu-oculto");
        menuIconCerrar.classList.remove("icono-menu-oculto");        
        setTimeout(function(){
            contenedorEnlaces.classList.remove("contenedor-enlaces--visualmenteoculto");
        }, 20);
    } else {
        contenedorEnlaces.classList.add('contenedor-enlaces--visualmenteoculto');
        menuIconAbrir.classList.remove("icono-menu-oculto");
        menuIconCerrar.classList.add("icono-menu-oculto");
        contenedorEnlaces.addEventListener('transitionend', function(e) {
            contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}, false);


for (let s of document.querySelectorAll("a.opcion-menu")){
    s.addEventListener("click", function (){
        if (!contenedorEnlaces.classList.contains("contenedor-enlaces--oculto")){
            contenedorEnlaces.classList.add('contenedor-enlaces--visualmenteoculto');
            menuIconAbrir.classList.remove("icono-menu-oculto");
            menuIconCerrar.classList.add("icono-menu-oculto");
            contenedorEnlaces.addEventListener('transitionend', 
                function(e) {contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
                }, {capture: false, once: true, passive: false
                    }
            );
        }
    }, false);
}
