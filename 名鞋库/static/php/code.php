<?php
	session_start();
	header("Content-type: image/png");
	$im = imagecreate(60,16);
	$bg = imagecolorallocate($im, 155,100,255);
	$white = imagecolorallocate($im, 255, 255, 255);
	$black = imagecolorallocate($im, 0, 0, 0); 
	
	$number_array = range(0,9);
	$abc = range('a','z');
	$big_abc = range('A','Z');
	$big_char = array_merge($number_array,$abc,$big_abc);
	
	$font = 'simsun.ttc';
	$myimagecode = '';
	for($i=0;$i<4;$i++){
		$str = $big_char[rand(0,61)];
		$myimagecode = $myimagecode.$str;
		$a = 50*$i;
		$b = 50*($i+1);
		imagettftext($im,20,0,mt_rand($a,$b),mt_rand(20,30),$black,$font,$str);
	}
	$_SESSION['thisimagecode'] = $myimagecode;
	for($i = 0;$i<60;$i++){
		imagesetpixel($im,mt_rand(0,60),mt_rand(0,16),$white);
	}
	
	for($i=0;$i<4;$i++){
		imageline($im, mt_rand(0,60),mt_rand(0,16), mt_rand(0,60), mt_rand(0,16),$black); 
	}
	
	imagepng($im);
	imagedestroy($im);
?>