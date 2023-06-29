
const urlSearchParams = new URLSearchParams(window.location.search);
const reviewTitulo = urlSearchParams.get("titulo");
const portada = urlSearchParams.get("portada");
const precio = parseFloat(urlSearchParams.get("precio"));
const reviews = sessionStorage.getItem(reviewTitulo);



let contenedor = document.getElementById('contenedor-review');
window.addEventListener('load',()=>{
    const dolarizado = consultaDolar().then((c)=>{
        let dolarizado = (precio*parseFloat(c)).toFixed(2);
        contenedor.innerHTML=`
        <div class="contenedor-grid" id="contenedor-grid">
        <h2 class="review-titulo">${reviewTitulo} </h2>
        <img class="portada-highlight" src=${portada}>
        <div class="precio-dolares">Precio en dolares: $${precio}</div>
        <div class="precio-pesosar">Precio en pesos argentinos: $${dolarizado} (mas impuestos)</div>
        <div class="reviews-titulo">Reviews</div>
        </div>
        `
        let contenedorGrid = document.getElementById('contenedor-grid');
        let cajaReviews = document.createElement("div");
        cajaReviews.className='caja-reviews';
        const jsReviews = JSON.parse(reviews);
        for (let user of Object.keys(jsReviews)){
            let parrafo = document.createElement("p");
            parrafo.className=`parrafo-review`;
            let username = document.createElement("span");
            username.className="username";
            username.innerText=`${user} :`;          
            let review = document.createElement("review");
            review.className="review";
            review.innerText=`${jsReviews[user]}`;
            parrafo.appendChild(username);
            parrafo.appendChild(review);
            cajaReviews.appendChild(parrafo);
            }
        contenedorGrid.appendChild(cajaReviews);
        });
});