///////////////////////////////////INICIO DEL AGREGAR

var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var datosenviar = {
            nombre: nombre,
        }
    console.log(datosenviar);


    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
    {
        method: "POST",
        body: JSON.stringify(datosenviar)
    }
    ).then(respuesta => respuesta.json())
     .then((datosrespuesta) =>{
      alert('El grupo con el nombre '+datosenviar.nombre+' fue agregado correctamente');
      window.location = 'listaGrupos.html'
        
     } ).catch(console.log)
    });


///////////////////////////////////FIN DEL AGREGAR