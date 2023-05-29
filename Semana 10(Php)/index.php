<!doctype html>
<html lang="en">
  <?php 
  $nombrepagina = 'Clase PhP';
  ?>

<?php
  //include 'menu.php';
  //include 'footer.php';

  require 'plantilla.php';

  $plantilla = new plantilla();

  //require es para cosas que son necesarias, sin embargo no afecta la lógica, como imagenes o algo similar
  ?>


<head>
  <title>PHP</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body>
  <header>
    <!-- place navbar here -->
    <?php
    echo $plantilla->getMenu();
    ?>
  </header>
  <main>
<!-- En PHP podemos crecar variables desde arriba del documento, y nada más llamarlas abajo-->
    <?php 
    $titulo = "<h2>$nombrepagina</h2>"; //Aquí no lo concatenamos pero aún así funciona
    echo $titulo; 



    echo '<div class="table-responsive">
      <table class="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle">
        <thead class="table-light">
          <caption>Table Name</caption>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="table-primary" >
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
            <tr class="table-primary">
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
          </tbody>
          <tfoot>
            
          </tfoot>
      </table>
    </div>'


    ?>

  </main>
  <footer>
    <!-- place footer here -->
    <?php echo $plantilla->getfooter();?>;
  </footer>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>