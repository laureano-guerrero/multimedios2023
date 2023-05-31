///////////////////////////////////INICIO DEL AGREGAR

var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var descripcion = document.getElementById('descripcion').value;
        var tiempo = document.getElementById('tiempo').value;

        var datosenviar = {
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo, 
            usuario:"Laureano" 
        }
       
    
    console.log(datosenviar);


    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
    {
        method: "POST",
        body: JSON.stringify(datosenviar)
    }
    ).then(respuesta => respuesta.json())
     .then((datosrespuesta) =>{
        alert('El curso con el nombre '+datosenviar.nombre+' fue agregado correctamente');
        window.location = 'listarCursos.html';
        
        
      

     } ).catch(console.log)
    });

///////////////////////////////////FIN DEL AGREGAR