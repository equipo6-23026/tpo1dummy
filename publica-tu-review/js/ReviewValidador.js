
function removerEspacios(texto){
  let textoFinal = texto.trim();
  let cantPalabrasFinal = [];
  cantPalabrasFinal = textoFinal.split(' ');
  return cantPalabrasFinal.length
}
const myReUsuario = new RegExp(/^[a-z0-9][a-z0-9_]{3,10}$/)
/* Solo letras y numeros, acepta guion bajo pero no al principio, entre 4 
y 10 caracteres */
const myReTitulo = new RegExp(/^(?=.*[a-zA-Z])[a-zA-Z0-9\s\-!&'():]+$/)
/* Valida que exista por lo menos una letra, y acepta
caracteres especiales y numeros tambien */
const myReUrl = new RegExp(/^\d{8}$/);
/* Solo acepta secuencia de 8 numeros. */
const myReImgUrl = new RegExp(/^(https?:\/\/[\w-]+(\.[\w-]+)+(:\d+)?(\/\S*)?)\.(jpeg|jpg|png|gif|bmp|svg)$/i);
function validando(){
  const form = document.getElementById('formReview');
  form.addEventListener("submit", e=>{
                            const nombre = document.getElementById('username');
                            const url = document.getElementById('basic-url');
                            const imageUrl = document.getElementById('image-url');
                            const titulo = document.getElementById('titulo');
                            const resena = document.getElementById('resena');
                            const parrafo  = document.getElementById('warning');
                            e.preventDefault();
                            let warnings = "";
                            let bandera = false;
                            parrafo.innerHTML=``;
                            if(!myReUsuario.test(nombre.value)){
                              warnings += `El usuario no es valido <br>`;
                              bandera = true;
                            } 
                            if(!myReTitulo.test(titulo.value.trim())){
                              warnings += `El titulo no es valido <br>`;
                              bandera = true;
                            } 
                            if(!myReUrl.test(url.value)){
                              warnings += `La URL de tu perfil no es valida <br>`;
                              bandera = true;
                            }
                            if(!myReImgUrl.test(imageUrl.value)){
                              warnings += `La URL de la imagen no es valida, asegurate de colocar http:// o https:// al principio, y que termine con la extension de la imagen<br>`;
                              bandera = true;
                            }
                            if( removerEspacios(resena.value) < 10){ /* Valida que haya mas de 10 palabras */
                              warnings += `La reseña no es valida <br>`;
                              
                              bandera = true;
                            } 
                            if (bandera){
                              parrafo.style.color='red';
                              parrafo.innerHTML=warnings;
                              location.href = '#warning';
                            } else {
                              document.getElementById('contenedor-review').removeChild(form);
                              parrafo.style.height='60vh'
                              parrafo.innerHTML=`Gracias por tu aporte `+ nombre.value +`, reseña en proceso de revision.`
                            }
                          }
                        )
}
