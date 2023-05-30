//////////CONSULTAR 
var contenidoTablaResultado = document.querySelector('#resultados');

  function CargarDatosEstudiantes() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")
      .then((respuesta) => respuesta.json()) //pedimos datos con esta url y el then recibe los  datos
      .then((datosrespuesta) => { //transforma los datos
        setTable(datosrespuesta.data) //lo envio a la función para darle tratamiento
      })
      .catch(console.log);
  }

  function setTable(datos){
      console.log('datos', datos); //muestra en consola solamente, es como un JOptionPane

      for (const valor of datos) {
          console.log('valor:', valor);
          contenidoTablaResultado.innerHTML += `

          <tr class="table-light" >
              <td scope="row">${valor.id}</td>
              <td>${valor.cedula}</td>
              <td>${valor.correoelectronico}</td>
              <td>${valor.telefono}</td>
              <td>${valor.telefonocelular}</td>
              <td>${valor.fechanacimiento}</td>
              <td>${valor.sexo}</td>
              <td>${valor.direccion}</td>
              <td>${valor.nombre}</td>
              <td>${valor.apellidopaterno}</td>
              <td>${valor.apellidomaterno}</td>
              <td>${valor.nacionalidad}</td>
              <td>${valor.idCarreras}</td>
              <td>${valor.usuario}</td>

              <td>
              <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                ||
              <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.cedula}', '${valor.correoelectronico}', '${valor.telefono}'
              , '${valor.telefonocelular}', '${valor.fechanacimiento}', '${valor.sexo}', '${valor.direccion}'
              , '${valor.nombre}', '${valor.apellidopaterno}', '${valor.apellidomaterno}', '${valor.nacionalidad}'
              , '${valor.idCarreras}')"
               role="button">Editar</a>
             </td>

            </tr> `;
          
      }
  }
  
  CargarDatosEstudiantes();
  ///////////////FIN DEL CONSULTAR


  //////////////EDITAR
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(e) {
  e.preventDefault();
    
   var id = document.getElementById('id').value;
   var cedula = document.getElementById('cedula').value;
   var correoelectronico = document.getElementById('correo').value;
   var telefono = document.getElementById('telefono').value;
   var telefonocelular = document.getElementById('celular').value;
   var fechanacimiento = document.getElementById('fechaNacimiento').value;
   var sexo = document.getElementById('sexo').value;
   var direccion = document.getElementById('direccion').value;
   var nombre = document.getElementById('nombre').value;
   var apellidopaterno = document.getElementById('apellidoPaterno').value;
   var apellidomaterno = document.getElementById('apellidoMaterno').value;
   var nacionalidad = document.getElementById('nacionalidad').value;
   var idCarreras = document.getElementById('idCarreras').value;

    var datosenviar = {
        id: id,
        cedula: cedula,
        correoelectronico: correoelectronico,
        telefono: telefono,
        telefonocelular: telefonocelular,
        fechanacimiento: fechanacimiento,
        sexo: sexo,
        direccion: direccion,
        nombre: nombre,
        apellidopaterno: apellidopaterno,
        apellidomaterno: apellidomaterno,
        nacionalidad: nacionalidad,
        idCarreras: idCarreras,
        usuario:'Laureano' 
    }
    
    console.log(datosenviar);
   
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
    {
        method:"POST",
        body:JSON.stringify(datosenviar)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrepuesta) => { 
        alert('Los datos se actualizaron correctamente'); 
        console.log('Datos',datosrepuesta.value)
        window.location = 'listaEstudiantes.html'        
        //Muestra el resultado de la peticion
    })
    .catch(console.log)//muestra errores
});



 //Se obtienen las variables y se igualan, se jalan los datos de la lista
 const myModal = new bootstrap.Modal(document.getElementById('modalId'));
 function editar(id,cedula,correo,telefono,celular,fechaNacimiento,sexo,direccion,nombre,apellidoPaterno,
    apellidoMaterno,nacionalidad,idCarreras){
    
    myModal.show();
    document.getElementById('cedula').value = cedula;
    document.getElementById('correo').value = correo;
    document.getElementById('telefono').value = telefono;
    document.getElementById('celular').value = celular;
    document.getElementById('fechaNacimiento').value = fechaNacimiento;
    document.getElementById('sexo').value = sexo;
    document.getElementById('direccion').value = direccion;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidoPaterno').value = apellidoPaterno;
    document.getElementById('apellidoMaterno').value = apellidoMaterno;
    document.getElementById('nacionalidad').value = nacionalidad;
    document.getElementById('idCarreras').value = idCarreras;
    document.getElementById('id').value = id;
  }



  //////////////FIN DEL EDITAR


/////////////INICIO DEL ELIMINAR

function eliminar(id){
    alert('Se eliminará el estudiante con el código '+id);
    var datosenviar = {
          id: id
      }

     
      fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php",
      {
          method:"POST",
          body:JSON.stringify(datosenviar)
      })//url de peticion de datos
      .then(respuesta => respuesta.json())//recibe los datos en formato json
      .then((datosrepuesta) => {      
          if (datosrepuesta.data==true) {
            alert('El estudiante con el código '+id+' fue eliminado correctamente');
          } else {
            alert('El estudiante con el código '+id+' no fue eliminado correctamente');
          }
          window.location = 'listaEstudiantes.html'  
      })
      .catch(console.log)//muestra errores
  }



 ///////////////FIN DEL ELIMINAR