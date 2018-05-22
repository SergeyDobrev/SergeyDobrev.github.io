<?php

$back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
 
   if(empty($_POST['name'])) {

      echo "Вы не заполнили поле имя! <Br> $back";  
      exit;

   } else {
      
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));

      echo "Ok! <Br>";
      echo "передаём имя: $name <Br>";
      echo "передаём телефон: $phone <Br>";
      echo $back;

   }
?>