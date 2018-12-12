<?php
	header("Content-type: text/html; charset=UTF-8");
		$username = $_GET["username"];
		$con =new mysqli('localhost','root','','db_uses_admin',3306);
		$coon = "select * from register where username = '$username'";
		$row = $con -> query($coon);
		$row = $row -> fetch_all();
		if($row){
			echo 1;
		}else{
			echo 2;
		}
		
?>