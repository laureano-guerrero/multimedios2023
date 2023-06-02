contenidoMenu.innerHTML +=  `
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="img/home.png" style="padding-left: 15%; width: 30%; height: 30%;">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item dropdown ps-2">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
            Listas
          </button>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="listarCursos.html">Lista de Cursos</a></li>
            <li><a class="dropdown-item" href="listaEstudiantes.html">Lista de Estudiantes</a></li>
            <li><a class="dropdown-item" href="listaProfesores.html">Lista de Profesores</a></li>
            <li><a class="dropdown-item" href="listaGrupos.html">Lista de Grupos</a></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown ps-2">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
            Agregar
          </button>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="crearCurso.html">Agregar Cursos</a></li>
            <li><a class="dropdown-item" href="crearEstudiante.html">Agregar Estudiantes</a></li>
            <li><a class="dropdown-item" href="crearProfesor.html">Agregar Profesores</a></li>
            <li><a class="dropdown-item" href="crearGrupo.html">Agregar Grupos</a></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

`;


