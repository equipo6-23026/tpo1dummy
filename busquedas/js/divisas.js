
async function consultaDolar(){
    function consultaDolarSi(){
        const API_URL='https://dolarsi.com/api/api.php?type=valoresprincipales';
            return fetch(`${API_URL}`).then((response) => response.json());
    }
    return consultaDolarSi().then((c) => {
        for (let casakey in Object.keys(c)){
            /*OBJETO EJEMPLO c[casakey].casa:
            Object { compra: "236,09", venta: "246,09", agencia: "349",
            nombre: "Dolar Oficial", variacion: "0,23",
            ventaCero: "TRUE", decimales: "2" }*/
            if (c[casakey].casa.nombre == "Dolar Oficial"){
                return c[casakey].casa.venta;
            }
        }
    })

}

 /* llamado de ejemplo (devuelve una promise):
 consultaDolar().then((c) => console.log(c));*/

