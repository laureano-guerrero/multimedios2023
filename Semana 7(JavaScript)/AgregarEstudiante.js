///////////////////////////////////INICIO DEL AGREGAR

var formulario = document.getElementById('formulario');
var contenidoSelectResultado = document.querySelector('#idCarreras');

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


    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
    {
        method: "POST",
        body: JSON.stringify(datosenviar)
    }
    ).then(respuesta => respuesta.json())
     .then((datosrespuesta) =>{
      alert('El estudiante con el nombre '+datosenviar.nombre+' fue agregado correctamente');
      window.location = 'listaEstudiantes.html'
        
     } ).catch(console.log)
    });


///////////////////////////////////FIN DEL AGREGAR


//////////////CARGAR SELECT

function cargaDatosSelect(){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
    .then((respuesta) => respuesta.json()) //pedimos datos con esta url y el then recibe los  datos
    .then((datosrespuesta) => { //transforma los datos
      setSelect(datosrespuesta.data) //lo envio a la función para darle tratamiento
    })
    .catch(console.log);
   }
  
   function setSelect(datos){
    console.log('datos', datos);
  
    for (const valor of datos) {
      console.log('valor:', valor);
  
      contenidoSelectResultado.innerHTML+= `
      <option value="${valor.id}">${valor.nombre} - ${valor.id} </option>
      `
    }
  
   }
   cargaDatosSelect();
  
  
   ////////////FIN DEL CARGAR SELECT