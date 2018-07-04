<?php

   header("Content-Type:text/html;charset=utf8");

   // параметры подключения к БД
   $host = 'localhost'; 
   $user = 'root'; 
   $password = ''; 

   $link = mysqli_connect($host, $user, $password);

   // имя таблицы и полей базы данных
   $database = 'employeesdb'; 
   $table = 'employees';
   $UserID = 'ID';
   $fio = 'fullname';
   $pos = 'position';
   $std = 'startdate';
   $sal = 'salary';
   $bos = 'boss';

   // вернуться назад
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

?>