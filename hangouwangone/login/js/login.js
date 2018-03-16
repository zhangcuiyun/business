	$(function(){
	$(".a1").hover(function(){
		$(this).css({color:"#3eb6e8"})
		$(".cont1").css({"background-position":"-96px  0"})
	
	},
	function(){
			$(this).css({color:"#ccc"})
			$(".cont1").css({"background-position":"0  0"})
	})
	$(".a2").hover(function(){
		$(this).css({color:"green"})
		$(".cont2").css({"background-position":"-160px 0"})
	
	},
	function(){
			$(this).css({color:"#ccc"})
			$(".cont2").css({"background-position":"-64px 0"})
	})
	
				
 var aInput = document.getElementsByTagName("input");
var tip = document.getElementById("tip");
	

	 

	//http://localhost/hangouwangone/login/php/login.php
	//xhr.send("username="+ username + "&pwd="+ pwd);
	aInput[0].value = getCookie("username");
	aInput[1].value = getCookie("pwd");
	$("#btn2").on("click",function(){
		//console.log(1)
		
			//获取上次登录的用户
	
	
	var username = aInput[0].value;
    var pwd = aInput[1].value;
      
      
		var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/hangouwangone/login/php/login.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 		xhr.send("username="+ username + "&pwd="+ pwd);

        
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                console.log(xhr.responseText);
                //json解析
                //如果注册成功则进入登录页面
               	var arr = JSON.parse(xhr.responseText);
               	console.log(arr.status);
               	if(arr.status==1){
               		
               		if (aInput[2].checked){
						var d = new Date();
						d.setDate(d.getDate()+7);
						console.log(aInput[0].value);
						$.cookie("username", aInput[0].value,{expires:30,path:"/"});
						//保存用户名到cookie
						setCookie("pwd", aInput[1].value, d); //保存密码到cookie
					}
               		$.cookie("username1", aInput[0].value,{expires:30,path:"/"})
					//setCookie("username1", aInput[0].value, d); //保存用户名到cookie
					alert("登录成功")
					location.href = "../../index/html/index.html";
                //如果失败则弹出提示信息
               	}
               	else{
               		alert("登录失败！请检查用户是否已注册！");
               		location.href = "../../register/html/register.html";
               	}
            }
        }
		


			
})
 
})