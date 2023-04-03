var texto = "E vários outros";
var index = 0;

setInterval(function() {
  var textoEscrito = texto.substring(0, index);
  document.getElementById("texto-escrito").textContent = textoEscrito + "|";
  index++;
  if (index > texto.length) {
    index = 0;
  }
}, 380);