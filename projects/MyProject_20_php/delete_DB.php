<?php

	// удаление БД

	include 'link_DB.php';

	$sql = "DROP DATABASE $database";
	$result = mysqli_query($link, $sql); 

	if ($result) {
		echo "Ok! БД $database успешно удалена <Br>";
		echo $back;

    } else {
		echo "Ошибка удаления в БД <Br>";
		echo $back;

    }

	mysqli_close($link);

?>