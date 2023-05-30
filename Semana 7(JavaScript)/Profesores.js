//////////CONSULTAR 
var contenidoTablaResultado = document.querySelector('#resultados');

  function CargarDatosProfesores() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")
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
              <td>${valor.idCarreras}</td>
              <td>${valor.usuario}</td>
              <td>${valor.nacionalidad}</td>
             
              

              <td>
              <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                ||
              <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.cedula}', '${valor.correoelectronico}', '${valor.telefono}'
              , '${valor.telefonocelular}', '${valor.fechanacimiento}', '${valor.sexo}', '${valor.direccion}'
              , '${valor.nombre}', '${valor.apellidopaterno}', '${valor.apellidomaterno}', '${valor.idCarreras}'
              , '${valor.nacionalidad}')"
               role="button">Editar</a>
             </td>

            </tr> `;
          
      }
  }
  
  CargarDatosProfesores();
  ///////////////FIN DEL CONSULTAR


  //////////////EDITAR
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(e) {
  e.preventDefault();
    
   var id = document.getElementById('id').value;
   var cedula = document.getElementById('cedula').value;
   var correoelectronico = document.getElementById('correoelectronico').value;
   var telefono = document.getElementById('telefono').value;
   var telefonocelular = document.getElementById('telefonocelular').value;
   var fechanacimiento = document.getElementById('fechanacimiento').value;
   var sexo = document.getElementById('sexo').value;
   var direccion = document.getElementById('direccion').value;
   var nombre = document.getElementById('nombre').value;
   var apellidopaterno = document.getElementById('apellidopaterno').value;
   var apellidomaterno = document.getElementById('apellidomaterno').value;
   var idCarreras = document.getElementById('idCarreras').value;
   var nacionalidad = document.getElementById('nacionalidad').value;
  
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
        idCarreras: idCarreras,
        usuario: 'Laureano',
        nacionalidad: nacionalidad
       
       
    }
    
    console.log(datosenviar);
   
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php",
    {
        method:"POST",
        body:JSON.stringify(datosenviar)
    })//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
    .then((datosrepuesta) => { 
        alert('Los datos se actualizaron correctamente'); 
        console.log('Datos',datosrepuesta.value)
        window.location = 'listaProfesores.html'        
        //Muestra el resultado de la peticion
    })
    .catch(console.log)//muestra errores
});



 //Se obtienen las variables y se igualan, se jalan los datos de la lista
 const myModal = new bootstrap.Modal(document.getElementById('modalId'));
 function editar(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,
    apellidomaterno,idCarreras,nacionalidad){
    
    myModal.show();
    document.getElementById('cedula').value = cedula;
    document.getElementById('correoelectronico').value = correoelectronico;
    document.getElementById('telefono').value = telefono;
    document.getElementById('telefonocelular').value = telefonocelular;
    document.getElementById('fechanacimiento').value = fechanacimiento;
    document.getElementById('sexo').value = sexo;
    document.getElementById('direccion').value = direccion;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidopaterno').value = apellidopaterno;
    document.getElementById('apellidomaterno').value = apellidomaterno;
    document.getElementById('idCarreras').value = idCarreras;
    document.getElementById('nacionalidad').value = nacionalidad;
    
    document.getElementById('id').value = id;
  }



  //////////////FIN DEL EDITAR
