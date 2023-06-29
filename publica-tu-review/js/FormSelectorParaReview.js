/* LOGICA SWITCH FORMULARIOS ENTRE LOGIN/REVIEW */
let formReview = `
        <label for="username">Tu usuario Sarasa </label>
          <div class="form-review-item">
            <input
              type="text"
              name="usuario"
              id="username"
              disabled
              value=`+sessionStorage.getItem('userName')+`
            />
          </div>
          <br>
          <label for="basic-url">
            Tu perfil de Steam/PS/Xbox/Nintendo (8 digitos, sin letras)
          </label>
          <div class="form-review-item">
            <span for="basic-url">
              http://steamcommunity.com/profiles/
            </span>
            <input
              type="text"
              id="basic-url"
              placeholder="12341234"
              class="steamid-input"
            />
          </div>
          <br>
          <label for="titulo">Titulo del Videojuego<span class="aclaracion">(Minimo 1 letra)</span></label>
          <div class="form-review-item">
            <input id="titulo" type="text">
          </div>
          <br>
          <label for="inputGroupFile02">
            Añadi tu captura de pantalla: (http://www.example.com/image.jpg)
          </label>
          <p><label>Formatos aceptados: jpg|jpeg|png|gif|bmp|svg </label></p>
          <div class="form-review-item">
            <input type="text" id="image-url" placeholder="https://www.imageurl.com/example.jpg"/>
          </div>
          <br>

          <div class="form-review-item">
            <p>Plataformas: </p>
            <ul class="plataforma-checklist">
              <li>
                <input
                type="checkbox"
                id="plataform-opt1"
                value="option1"
                checked
                />
                <label for="plataform-opt1">Steam</label>
              </li>
              <li>
                <input
                type="checkbox"
                id="plataform-opt2"
                value="option2"
                />
                <label for="plataform-opt2">Playstation</label>
              </li>
              <li>
                <input
                type="checkbox"
                id="plataform-opt3"
                value="option3"
                />
                <label for="plataform-opt3">Xbox </label>
              </li>
              <li>
                <input
                type="checkbox"
                id="plataform-opt4"
                value="option4"
                />
                <label for="plataform-opt4">Nintendo </label>
              </li>
            </ul>
          </div>
          <br>
          <div class="form-review-item">
            <p>Reseña (Minimo: 10 palabras)</p>
            <textarea
              cols=40
              rows=10
              id="resena"
            ></textarea>
          </div>
          <br>
          <button type="submit">Enviar</button>
          <div class="logout-container"><a class="logout-link" href="" onclick="logout()">Cerrar Sesion</div> 
`

let loginError = `
<div class="form-login-item">
  <label for="usuario">Usuario:</label>
  <input type="text" name="usuario" id="usuario">
</div>

<div class="form-login-item">
    <label for="contrasena">Contraseña:</label>
    <input type="password" name="contrasena" id="contrasena">
    
</div>
<button class="btn-login" type=submit()>Enviar</button>
`
let log = false;
let bool = false;
function switchingForm(){
  let principal = document.getElementById("formReview");
  principal.innerHTML="";
  log = sessionStorage.getItem('logueado');
    if (log === 'true'){
      principal.innerHTML=formReview;
      validando();
     } else{
      principal.innerHTML=loginError;
      login();
    }
  }
window.addEventListener("load", switchingForm());

