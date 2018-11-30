<?php
		header("Content-type: text/html; charset=UTF-8");
		$username = $_GET["username"];
		$pass = $_GET["password"];
		$tel = $_GET["phone"];
		$age = $_GET["age"];
		$con =new mysqli('localhost','root','','db_student_admin',3306);
		$coon = "insert into user_info (username,password,tel,age) values('$username','$pass','$tel','$age')";
		$row = $con->query($coon);
		if($row) 
			{
				echo "学生已经添加进数据表";
			}else{
			 	echo "该学生没有添加进数据表，请重新输入.";
			 }	
?>