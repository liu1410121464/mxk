<?php
		header("Content-type: text/html; charset=UTF-8");
		$username = $_GET["username"];
		$pass = $_GET["password"];
		$con =new mysqli('localhost','root','','db_uses_admin',3306);
		$coon = "insert into register(username,password) values('$username','$pass')";
		$row = $con->query($coon);
		if($row) 
			{
				echo "用户已经添加进数据表";
			}else{
			 	echo "该用户没有添加进数据表，请重新输入.";
			 }	
?>