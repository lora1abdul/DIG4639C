<?php
   include('session.php');
?>
<html>

   <head>
      <title> Central Perk </title>
      <link rel="shortcut icon" href="img/fi.ico" />


   </head>
   <header>
     <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="about.html">About</a></li>
       <li><a href="gallery.html">Products!</a></li>
       <li><a href="sample.html">Order</a></li>
   <li><a href="index1.php">login</a></li>
     <li><a href="signup.php">Signup!</a></li>
     </ul>
   </header>

   <body>
      <h1>Welcome <?php echo $login_session; ?></h1>
      <h2><a href = "logout.php">Sign Out</a></h2>
   </body>

</html>
