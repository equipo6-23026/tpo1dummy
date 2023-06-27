function seParecen(str1, str2){
    var puntaje_de_parecido = 0;
    if ((String(str1).toUpperCase() == String(str2).toUpperCase()))
        {puntaje_de_parecido = puntaje_de_parecido +1;
        }

    str1 = String(str1).toUpperCase().replace(/[^0-9a-z ]/gi, "").split(" ");
    str2 = String(str2).toUpperCase().replace(/[^0-9a-z ]/gi, "").split(" ");

    for (let palabrabd of str1){
        for (let palabrabusqueda of str2){
            if (palabrabd.includes(palabrabusqueda)){
                str2.splice(str2.indexOf(palabrabd),1);    
                puntaje_de_parecido = puntaje_de_parecido + 1;
            }
        }
    }

    return puntaje_de_parecido;
}


function buscarTitulo(tituloABuscar, jsonFileUrl){
    
    return fetch(jsonFileUrl).then((response) => response.json()).then((j) => {
        var resultados=[];
        for (var kj of Object.keys(j)){  
            if (parseInt(seParecen(String(j[kj].titulo),String(tituloABuscar)))>parseInt(0)){
                resultados.push(j[kj]);
            }
        }
        var aux;
        for (let i=0;i<resultados.length-1;i++){
            for (let j=0;j<resultados.length-1-j;j++){
                if (seParecen(resultados[i],tituloABuscar) > seParecen(resultados[i+1],tituloABuscar)){
                    aux=resultados[i+1];
                    resultados[i+1]=resultados[i];
                    resultados[i]=aux;
                }
            }
        }
        return resultados;});
    }

function masNuevos(jsonFileUrl, cantidadDeTitulos=3){
        return fetch(jsonFileUrl).then((response) => response.json()).then(j => {
            let vg= Object.values(j);
            let temp;
            for (let i=1; i<vg.length-1; i++){
                for (let j=0; j<vg.length-i; j++){
                    if (vg[j].fecha<vg[j+1].fecha){
                        temp=vg[j+1];
                        vg[j+1]=vg[j];
                        vg[j]=temp;
                    }
                }
                }
            return vg.slice(0,cantidadDeTitulos)
        })
    };

    const urlSearchParams = new URLSearchParams(window.location.search);
    const tituloBuscado = urlSearchParams.get("search");
    let contenedor = document.getElementById('resultado-busqueda');


    window.addEventListener('load',()=>{
        buscarTitulo(tituloBuscado,'../database.json').then(arr => {
            arr = Object.values(arr);
            let h2 = document.createElement('h2');
            h2.innerText = `Resultados`;
            h2.className = `titulo-resultados`;
            contenedor.appendChild(h2);
            arr.forEach(e=>{
                let tempR;
                let aux = document.createElement('a');
                aux.innerText = `${e.titulo}`;
                aux.href=`./review.html?titulo=${e.titulo}&portada=${e.portada}&precio=${e.precio}`;
                aux.className='link-resultado';
                contenedor.appendChild(aux);
                contenedor.appendChild(document.createElement('br'));
                tempR=JSON.stringify(e.reviews);
                sessionStorage.setItem(e.titulo,tempR);
                ;
            })
        })
    })




//buscarTitulo("hades", "db.json").then((r) => console.log(r)); // <- EJEMPLO DE LLAMADO