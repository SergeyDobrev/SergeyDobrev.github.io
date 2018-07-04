<?php

	include 'link_DB.php';

	echo $back ;

	$sql = "USE $database";
	$result = mysqli_query($link, $sql); 

		if ($result) echo "Ok! Успешно подключились к БД $database <Br><Br>";
		else echo "Ошибка подключения к БД $database <Br>";


	$sql = "SELECT COUNT(1) FROM $table";
	$result = mysqli_query($link, $sql); 

	$b = mysqli_fetch_array( $result );
	echo "В БД записей - $b[0] <Br>"; 


//Функция получения массива каталога
	function get_cat() {
			include 'link_DB.php';
 //запрос к базе данных
		$sql = "SELECT * FROM $table";
 		$result = mysqli_query($link, $sql);
 		echo "----???--- $result <br>";
 		if(!$result) {
 			echo "++++Ok! mysqli_query <br>";
  			return NULL;
 		}
 		else echo "Ok! mysqli_query <br>";

 		$arr_cat = array();

 		$t = mysqli_num_rows($result);
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