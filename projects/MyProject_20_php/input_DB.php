<?php

   include 'link_DB.php';
    
   // заполнение БД данными 50 001 строк;
   $maxrow = 50001;

   echo $back;

   $sql = "USE $database";
   $result = mysqli_query($link, $sql); 

      if ($result) echo "Ok! Успешно подключились к БД $database <Br>";
      else echo "Ошибка подключения к БД $database <Br>";

   $i = 1;
   $position = 'boss';
   $bossID = 0;
   insertrow($i, $position, $bossID, $table, $link, 0);
   $bossID1 = $i;
   $i++;

   $i1 = 1;
   while ($i1 < 10 && $i <= $maxrow) {
      $position = 'country manager';
      insertrow($i, $position, $bossID1, $table, $link, 1);
      $bossID2 = $i;
      $i++; 

      $i2 = 1;
      while ($i2 < 10 && $i <= $maxrow) {
         $position = 'area manager';
         insertrow($i, $position, $bossID2, $table, $link, 2);
         $bossID3 = $i;
         $i++; 

         $i3 = 1;
         while ($i3 < 10 && $i <= $maxrow) {
            $position = 'supervisor';
            insertrow($i, $position, $bossID3, $table, $link, 3);
            $bossID4 = $i;
            $i++;

            $i4 = 1;
            while ($i4 < 10 && $i <= $maxrow) {
               $position = 'representative';
               insertrow($i, $position, $bossID4, $table, $link, 4);
               $bossID5 = $i;
               $i++;

               $i5 = 1;
               while ($i5 < 8 && $i <= $maxrow) {
                  $position = 'helper';
                  insertrow($i, $position, $bossID5, $table, $link, 5);
                  $i++;
                  $i5++;

               }
            $i4++;

            }
         $i3++;

         }
      $i2++;

      }      
   $i1++;

   }


   $sql = "SELECT COUNT(1) FROM $table";
   $result = mysqli_query($link, $sql);

   if ($result) {
      $n = mysqli_fetch_array($result);
      echo "Ok! В БД записей - $n[0] <Br>";
   }
   else echo "Ошибка выполнения запроса подсчёта записей в БД <Br>";
   echo $back;


   mysqli_close($link);

   function insertrow($i, $position, $bossID, $table, $link, $lavel) {

      $firstname = ['Ivan', 'Peter', 'Sergey', 'Dmitriy', 'Fyodor', 'Andrey', 'Vasiliy', 'Boris', 'Denis', 'Alexey'];
      $secondname = ['Ivanovich', 'Petrovich', 'Sergeevich', 'Dmitrievich', 'Fyodorovich', 'Andreevich', 'Vasilyevich', 'Borisovich', 'Denisovich', 'Alexeevich'];
      $lastname = ['Ivanov', 'Petrov', 'Sergeev', 'Dmitriev', 'Fyodorov', 'Andreev', 'Vasilyev', 'Borisov', 'Denisov', 'Alexeev'];

      $fullname = $lastname[(rand(0,9))] . ' ' . $firstname[(rand(0,9))] . ' ' . $secondname[(rand(0,9))];
      $startdate = rand(2001,2017) . '-' . rand(1,12) . '-' . rand(1,27);
      $salary = rand(10,15) * 1000 * (6 - $lavel);  
      $leftpadding = $lavel * 100;

      $sql = "INSERT INTO $table VALUES ($i, '$fullname', '$position', '$startdate', '$salary', $bossID)";
      $result = mysqli_query($link, $sql);  
         if ($result) echo "<div style='
            width: 300px; 
            margin: 2px;
            margin-left: $leftpadding;
            padding: 10px; 
            border: 1px solid black'>

            $i.<br>
            Full name: $fullname<br>
            Position: $position<br>
            Salary: $salary uah. Sart Date: $startdate </div>";

   }

?>