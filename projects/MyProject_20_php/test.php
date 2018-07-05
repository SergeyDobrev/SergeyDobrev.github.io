<?php

	include 'link_DB.php';

	echo $back ;

	$sql = "USE $database";
	$result = mysqli_query($link, $sql); 

		if ($result) echo "Ok! Успешно подключились к БД $database <Br><Br>";
		else echo "Ошибка подключения к БД $database <Br>";


	$sql = "SELECT COUNT(1) FROM $table";
	$result = mysqli_query($link, $sql); 

	$b = mysqli_fetch_array($result);

	$sql = "SELECT * FROM $table";
	$result = mysqli_query($link, $sql); 

 	$t = mysqli_num_rows($result);
	$b = mysqli_fetch_array($result);
	echo "$t +++<Br>"; 
	echo "$b[0] <Br>"; 
	echo "$b[1] <Br>"; 
	echo "$b[2] <Br>"; 
	echo "$b[3] <Br>"; 
	echo "$b[4] <Br>"; 
	echo "$b[5] <Br>"; 
	// echo "$b[6] <Br>"; 
	// echo "$b[7] <Br>"; 
	// echo "запрос SELECT * FROM table - <Br> $b[2] <Br>";
	printer_r($result);


//Функция получения массива каталога
	function get_cat() {
			include 'link_DB.php';
 //запрос к базе данных
		$sql = "SELECT * FROM $table";
 		$result = mysqli_query($link, $sql);

  		$arr_cat = array();

 		echo "mysqli_num_rows $t";

 		if(mysqli_num_rows($result) != 0) {

  			//В цикле формируем массив
  			for($i = 0; $i < mysqli_num_rows($result); $i++) {
 				$row = mysqli_fetch_array($result,MYSQL_ASSOC);

 				//Формируем массив, где ключами являются адишники на родительские категории
 				if(empty($arr_cat[$row['boss']])) {
 					$arr_cat[$row['boss']] = array();
 				}

 				$arr_cat[$row['boss']][] = $row;
  			}

  		//возвращаем массив
  		return $arr_cat;
	}
}

$result = get_cat();
print_r($result);


	mysqli_close($link);

?>