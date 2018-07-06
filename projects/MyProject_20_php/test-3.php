<?php

	$bootstraplink = "<link rel='stylesheet' href='css/bootstrap.min.css'>";
	$csslink = "<link rel='stylesheet' href='css/style-test.css'>";


	// echo $csslink;
	// echo $bootstraplink;
	// echo "<div>";
	// echo "<button action='create_DB.php' class='btn btn-primary btn-lg'>test 2</button>";
	// echo "</div>";


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

	echo $back;



	$sql = "SELECT * FROM $table ORDER BY $bos";
	$result = mysqli_query($link, $sql);

	foreach ($result as $itemResult) {
		echo $itemResult['ID'].'. ФИО: '.$itemResult['fullname'].'position: '.$itemResult['position'].' - boss id: '.$itemResult['boss'].'<br>';
	}



?>