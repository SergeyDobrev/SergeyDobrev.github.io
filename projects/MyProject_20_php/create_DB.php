<?php

   // создание БД, таблицы и полей в БД

   include 'link_DB.php';

   $sql = "CREATE DATABASE $database";
   $result = mysqli_query($link, $sql);  

      if ($result) echo "Ok! БД $database успешно создана <Br>";
      else echo "Ошибка создания БД $database <Br>";
 
   $sql = "USE $database";
   $result = mysqli_query($link, $sql); 


   $sql = "CREATE TABLE $table (

      $UserID INT(6) NOT NULL ,
      $fio VARCHAR(255) CHARACTER SET cp1251 COLLATE cp1251_ukrainian_ci,
      $pos VARCHAR(255) CHARACTER SET cp1251 COLLATE cp1251_ukrainian_ci,
      $std DATE,
      $sal INT(11),
      $bos INT(6),
      PRIMARY KEY ($UserID)

   )";

   $result = mysqli_query($link, $sql); 

      if ($result) echo "Ok! Таблица и поля успешно создана в БД $database <Br>";
      else echo "Ошибка создания  таблицы и полей в БД $database <Br>";
      echo $back;

   mysqli_close($link);
?>