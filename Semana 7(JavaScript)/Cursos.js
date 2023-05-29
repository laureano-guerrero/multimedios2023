
////////////////////////////////////CONSULTAR

//Función que nos permite obtener los datos directamente desde la API, nos llega en datos respuesta

function CargarDatosCursos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")
      .then((respuesta) => respuesta.json()) //pedimos datos con esta url y el then recibe los  datos
      .then((datosrespuesta) => { //transforma los datos
        setTable(datosrespuesta.data) //lo envio a la función para darle tratamiento
      })
      .catch(console.log);
  }

  //Esta función pinta los datos en el HTML
  function setTable(datos){
      console.log('datos', datos); //muestra en consola solamente, es como un JOptionPane

      for (const valor of datos) {
          console.log('valor:', valor);
          contenidoTablaResultado.innerHTML += `

          <tr class="table-light" >
              <td scope="row">${valor.id}</td>
              <td>${valor.nombre}</td>
              <td>${valor.descripcion}</td>
              <td>${valor.tiempo}</td>
            
            <td>
              <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                ||
              <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}', '${valor.descripcion}', '${valor.tiempo}')" role="button">Editar</a>
             </td>

            </tr> `;
      }
  }
  
////////////////////////////////////FIN DEL CONSULTAR

////////////////////////////////////EDITAR
    

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
   alert('salvando');
   var id = document.getElementById('id').value;
   var nombre = document.getElementById('nombre').value;
   var descripcion = document.getElementById('descripcion').value;
   var tiempo = document.getElementById('tiempo').value;

    var datosenviar = {
        id: id,
        nombre:nombre,
        descripcion:descripcion,
        tiempo:tiempo,
        usuario:'Laureano' 
    }
    
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
    {
        method:"POST",
        body:JSON.stringify(datosenviar)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrepuesta) => {    
        window.location = 'listarCursos.html'        
         console.log('Datos',datosrepuesta.value)//Muestra el resultado de la peticion
    })
    .catch(console.log)//muestra errores
});

 //Se obtienen las variables y se igualan, se jalan los datos de la lista
 function editar(id, nombre, descripcion, tiempo){
    myModal.show();
    document.getElementById('nombre').value = nombre;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('tiempo').value = tiempo;
    document.getElementById('id').value = id;
  }
////////////////////////////////////FIN DEL EDITAR



//////////////////////////////////INICIO DEL ELIMINAR
function eliminar(id){
  alert('Se eliminará el curso con el código '+id);
  var datosenviar = {
        id: id
    }
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
    {
        method:"POST",
        body:JSON.stringify(datosenviar)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrepuesta) => {      
        if (datosrepuesta.data==true) {
          alert('El curso con el código '+id+' fue eliminado correctamente');
        } else {
          alert('El curso con el código '+id+' no fue eliminado correctamente');
        }
        window.location = 'listarCursos.html'  
    })
    .catch(console.log)//muestra errores
}