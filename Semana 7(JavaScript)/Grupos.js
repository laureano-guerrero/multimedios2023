////////////////////////////////////CONSULTAR

//Función que nos permite obtener los datos directamente desde la API, nos llega en datos respuesta
var contenidoTablaResultado = document.querySelector('#resultados');
function CargarDatosGrupos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
      .then((respuesta) => respuesta.json()) //pedimos datos con esta url y el then recibe los  datos
      .then((datosrespuesta) => { //transforma los datos
        console.log(datosrespuesta);
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
              
            
            <td>
              <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                ||
              <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}')" role="button">Editar</a>
             </td>

            </tr> `;
      }
  }

  CargarDatosGrupos();
  
////////////////////////////////////FIN DEL CONSULTAR

////////////////////////////////////EDITAR
    
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  
   var id = document.getElementById('id').value;
   var nombre = document.getElementById('nombre').value;
   

    var datosenviar = {
        id: id,
        nombre:nombre, 
    }
    
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
    {
        method:"POST",
        body:JSON.stringify(datosenviar)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrepuesta) => { 
        alert('Los datos se actualizaron correctamente');   
        window.location = 'listaGrupos.html'        
        console.log('Datos',datosrepuesta.value)//Muestra el resultado de la peticion
    })
    .catch(console.log)//muestra errores
});



 //Se obtienen las variables y se igualan, se jalan los datos de la lista
 const myModal = new bootstrap.Modal(document.getElementById('modalId'));
 function editar(id, nombre){
    myModal.show();
    document.getElementById('id').value = id;
    document.getElementById('nombre').value = nombre;
   
  }

 
  
////////////////////////////////////FIN DEL EDITAR

//////////////////////////////////INICIO DEL ELIMINAR
function eliminar(id){
    alert('Se eliminará el grupo con el código '+id);
    var datosenviar = {
          id: id
      }
      fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php",
      {
          method:"POST",
          body:JSON.stringify(datosenviar)
      })//url de peticion de datos
      .then(respuesta => respuesta.json())//recibe los datos en formato json
      .then((datosrepuesta) => {      
          if (datosrepuesta.data==true) {
            alert('El grupo con el código '+id+' fue eliminado correctamente');
          } else {
            alert('El grupo con el código '+id+' no fue eliminado correctamente');
          }
          window.location = 'listaGrupos.html'  
      })
      .catch(console.log)//muestra errores
  }
