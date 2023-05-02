function actualizarFechaHora() {
  // Obtener la fecha y hora actual
  var fecha = new Date();
  var diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


  // Formatear la fecha y hora
  var fechaFormateada = diaSemana[fecha.getDay()] + ", "+ fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear();
  var horaFormateada = fecha.getHours() + ":" + fecha.getMinutes();

  // Actualizar el texto en la pagina
  document.getElementById("fecha-hora").innerHTML = "Hoy es " + fechaFormateada + ", y son las "+ horaFormateada + "horas";
}

  // Actualizar la fecha y hora cada segundo
  setInterval(actualizarFechaHora, 1000);