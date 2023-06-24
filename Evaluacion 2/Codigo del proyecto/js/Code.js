const ocultar = document.getElementById("ocultar");
ocultar.style.display = "none";

let modoOscuro = false;

function cambiarModo() { 
  var cuerpoweb = document.body; 
  cuerpoweb.classList.toggle("oscuro");
  
  modoOscuro = !modoOscuro; 
  
  const mostrar = document.getElementById("mostrar");
  const ocultar = document.getElementById("ocultar");
  
  if (modoOscuro) {
    mostrar.style.display = "none";
    ocultar.style.display = "inline";
  } else {
    mostrar.style.display = "inline";
    ocultar.style.display = "none";
  }
}



function mostrarHora() {
    const fecha = new Date(); 
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const horaFormateada = hora < 10 ? "0" + hora : hora;
    const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;
    const reloj = document.getElementById("reloj");
    reloj.textContent = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
  }

  setInterval(mostrarHora, 1000);

  const miElemento = document.getElementById('mi-elemento');

