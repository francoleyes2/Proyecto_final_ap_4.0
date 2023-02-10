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


  document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('text-v').style.display ='none';
    });




 /*  contacto  */

 function boton_confi() {
  document.getElementById("mensaje_exito").innerHTML = "Tu Mensaje se ha enviado correctamente";}