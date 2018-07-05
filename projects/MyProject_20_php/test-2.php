<?php

	$bootstraplink = "<link rel='stylesheet' href='css/bootstrap.min.css'>";
	$csslink = "<link rel='stylesheet' href='css/style-test.css'>";


	echo $csslink;
	echo $bootstraplink;
	echo "<div>";
	echo "<button action='create_DB.php' class='btn btn-primary btn-lg'>test 2</button>";
	echo "</div>";


	include 'link_DB.php';

	$sql = "USE $database";
	$result = mysqli_query($link, $sql); 

     	if ($result) echo "Ok! Успешно подключились к БД $database <Br>";
     	else echo "Ошибка подключения к БД $database <Br>";

	// кол-во строк в БД
	$sql = "SELECT COUNT(1) FROM $table";
	$result = mysqli_query($link, $sql);

	if ($result) {
		$n = mysqli_fetch_array($result);
		echo "Ok! В БД записей - $n[0] <Br>";
		print_r($result);
		echo "<br>";
	}
	else echo "Ошибка выполнения запроса подсчёта записей в БД <Br>";


	// кол-во строк в БД вапиант 2
	$sql = "SELECT * FROM $table";
	$result = mysqli_query($link, $sql);

	if ($result) {
		$t = mysqli_num_rows($result);
		echo "Ok! В БД записей - $t <Br>";
		print_r($result);
		echo "<br>";
	}
	else echo "Ошибка выполнения запроса подсчёта записей в БД <Br>";


	echo $back;



?>