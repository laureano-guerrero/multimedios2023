///////////////////////////////////INICIO DEL AGREGAR

var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

       var cedula = document.getElementById('cedula').value;
       var correoelectronico = document.getElementById('correoelectronico').value;
       var telefono = document.getElementById('telefono').value;
       var telefonocelular = document.getElementById('telefonocelular').value;
       var fechanacimiento = document.getElementById('fechanacimiento').value;
       var sexo = document.getElementById('sexo').value;
       var direccion = document.getElementById('dirrecion').value;
       var nombre = document.getElementById('nombre').value;
       var apellidopaterno = document.getElementById('apellidopaterno').value;
       var apellidomaterno = document.getElementById('apellidomaterno').value;
       var nacionalidad = document.getElementById('nacionalidad').value;
       var idCarreras = document.getElementById('idCarreras').value;


        var datosenviar = {
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
            usuario: 'Laureano'
        }
       
    
    console.log(datosenviar);


    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php",
    {
        method: "POST",
        body: JSON.stringify(datosenviar)
    }
    ).then(respuesta => respuesta.json())
     .then((datosrespuesta) =>{
      alert('El profesor con el nombre '+datosenviar.nombre+' fue agregado correctamente');
        
     } ).catch(console.log)
    });


///////////////////////////////////FIN DEL AGREGAR