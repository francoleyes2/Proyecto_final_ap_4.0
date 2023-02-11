 /*  info  */

function limpiar(){
  document.getElementById('mi_formulario').reset();
}


function sumar(){
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  var z = parseInt(x + y);
  
  document.getElementById("resultado_x").innerHTML = z;
}


function mostrar_mensaje_h() {
    document.getElementById("hello").innerHTML = "Hello World!!!!!!";
  };

function mostrar_mensaje_t() {
    document.getElementById("text-c").innerHTML = "Buenos Días";
  };


  document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById('text-v').style.display ='none';
    });






const txt = '{"nombre":"Franco", "edad":21, "ciudad":"Buenos Aires"}'
const obj = JSON.parse(txt);
document.getElementById("json-01").innerHTML = obj.nombre + ", " + obj.edad + ", " + obj.ciudad + ", ";





fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));





 

  function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 0;
    }
    document.getElementById("clickk").innerHTML = localStorage.clickcount;
  }






  var x = document.getElementById("geo-01");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }




 /*  contacto  */

 function boton_confi() {
  document.getElementById("mensaje_exito").innerHTML = "Tu Mensaje se ha enviado correctamente";}