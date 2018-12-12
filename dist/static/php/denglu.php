<?php

session_start();

		header("Content-type: text/html; charset=UTF-8");
		$username = $_POST["username"];
        $pass = $_POST["password"];
        $ver_code = $_POST["ver_code"];
        $con =new mysqli('localhost','root','','db_uses_admin',3306);
        $coon = " select username,password from register where username = '$username'and password ='$pass'";
        $row = $con->query($coon);
        $row = mysqli_fetch_array($row);	
		if(strtolower($ver_code)==$_SESSION['authcode']){
            
			if($row){
                if ($pass == $row['password']) {
                    $_SESSION['user']=$username;
                    $data = array('status'=>'登录成功！');
                    echo "<SCRIPT LANGUAGE=\"JavaScript\">location.href='../../index.html'</SCRIPT>";
                }else{
                    $data = array('status'=>'密码错误');
                    echo '<script>alert("密码错误！");window.location="../../denglu.html";</script>';
                }
            }else{
                $data=array("status"=>"用户不存在！");
                echo '<script>alert("用户名错误！");window.location="../../denglu.html";</script>';
            }	 
		}else{
            $data=array("status"=>"验证码错误！");
            echo '<script>alert("验证码错误！");window.location="../../denglu.html";</script>';
			}
        echo json_encode($data);
?>