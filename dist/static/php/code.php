<?php
	session_start();
	$image=imagecreatetruecolor(100, 30);
	$bgcolor=imagecolorallocate($image, 255, 255, 255);//设置背景为白色,默认为黑色
	imagefill($image, 0, 0, $bgcolor);//填充颜色，把所有与（x，y）颜色相同的点都涂成bgcolor
	$captch_code='';//保存验证码的变量
	for($i=0;$i<4;$i++){
		$fontsize=1500;//字体大小为6px
		$fontcolor=imagecolorallocate($image, rand(0,120),rand(0,120),rand(0,120));
		$data='3456789qwertyuipkjhgfdsaxcvbnmQWERTYUIPLKJHGFDSAXCVBNM';//字母数字混合字典
		$fontcontent=substr($data, rand(0,strlen($data)),1);//取从0到末尾这一段中的随机一个字符
		$captch_code.=$fontcontent;//加入到保存验证码的变量中
		$x=rand(5,10)+($i*100/4);
		$y=rand(5,10);
		imagestring($image, $fontsize, $x, $y, $fontcontent, $fontcolor);
	}
	for($i=0;$i<200;$i++){
		$pointcolor=imagecolorallocate($image, rand(50,200),rand(50,200), rand(50,200));
		imagesetpixel($image, rand(1,99), rand(1,29), $pointcolor);//画两百个随机位置随机颜色的点，作为干扰元素
	}
	for($i=0;$i<3;$i++){
		$linecolor=imagecolorallocate($image, rand(80,220), rand(80,220), rand(80,220));
		imageline($image, rand(1,99), rand(1,29), rand(1,99), rand(1,29), $linecolor);//画三条随机位置随机颜色的线
	}
	$_SESSION['authcode']=strtolower($captch_code);//把生成的验证码保存到session服务器
	header('content-type:image/png');
	imagepng($image);
	imagedestroy($image);
?>