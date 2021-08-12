function capturar() {
  function Bebida(nombre, cantidad) {
    this.bebida = nombre;
    this.cantidad = cantidad;
  }
  var bebidaCapturar = document.getElementById("bebida").value;
  var cantidadCapturar = document.getElementById("cantidad").value;
  nuevaBebida = new Bebida(bebidaCapturar, cantidadCapturar)
  console.log(nuevaBebida)
  agregar();
}

var stock = [];

function agregar() {
  stock.push(nuevaBebida);
  document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaBebida.bebida+'</td><td>'+nuevaBebida.cantidad+'</td></tbody>';
}