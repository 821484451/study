<?php
	echo 'helloworld<br/>';
	$x = 1;
	$y = 2;
	$z = $x + $y;
	$cars = Array("biyadi","aodi", "baoma");
	$cars1 = Array('biyadi','aodi', 'baoma');
	$str = "欢迎来到这个世界";
echo <<<EOT
    "我是无名，"$str
EOT;
	//var_dump($z) ;
	function myTest(){
		global $x, $y;
		$y = $x + $y;
		static $k = 0;
		echo $k, '<br/>';
		$k++;
	}
	var_dump($cars, $cars1);
	//var_dump($GLOBALS);
	myTest();
	//var_dump($y);
	myTest();
	myTest();
	echo "我的车的牌子是{$cars[0]},但是我比较喜欢{$cars1[2]}<br/>";
	//定界符
	echo <<< EOT
        <table width=80% border="2" cellpadding="3" cellspacing="0" bordercolor="#808080">
            <tr bgcolor="#84A9E1">
                <td align="center">ClassID</td>
                <td align="center">stuno</td>
                <td   align="center">学生姓名</td>
                <td align="center">家长姓名</td>
                <td align="center">家长手机号</td>
            </tr>
        </table>
EOT;
    //定义常量
    define("greet","你好呀大兄弟<br/>");
    echo greet ; 
    //php中连接字符串的不使用+号，一般使用并置运算符（.）
    echo "我是好人，你是什么东西" . greet . $str . "<br/>";
    //获取字符串的长度
    echo strlen($str), "<br/>";//输出24，一个文字代表三个字符
    echo strpos($str,"好的"), "<br/>";//当存在则返回索引，不存在则无返回，所以只适合判断是否存在字符串
    echo date("c") ,"<br/>" ,date("r") ;

    //数组
    echo "<br>*******************************************************************************************<br>";

    $zoo = Array("tiger", "line", "cat", "dog");//数值数组
    $person = Array("head" => "big", "eyes" => "blue", "hair" => "red" );
    foreach($person as $u => $u_value){
    	echo $u."is".$u_value."<br>";
    };
    $num = Array(1,3,5,2,4,9,6,8,0);
    for($i = 0; $i < count($num) ; $i++){
    	echo $num[$i];
    };
    var_dump(sort($num), "<br>") ;


?>
<?php
    $q = isset($_POST['q'])? $_POST['q'] : '';
    if(is_array($q)) {
        $sites = array(
                'RUNOOB' => '菜鸟教程: http://www.runoob.com',
                'GOOGLE' => 'Google 搜索: http://www.google.com',
                'TAOBAO' => '淘宝: http://www.taobao.com',
        );
        foreach($q as $val) {
            // PHP_EOL 为常量，用于换行
            echo $sites[$val] . PHP_EOL;
        }
          
    } else {
?>
<form action="" method="post"> 
    <input type="checkbox" name="q[]" value="RUNOOB"> Runoob<br> 
    <input type="checkbox" name="q[]" value="GOOGLE"> Google<br> 
    <input type="checkbox" name="q[]" value="TAOBAO"> Taobao<br>
    <input type="submit" value="提交">
</form>

<?php
    }
?>