$(function(){
	
	/*鼠标滑过切换注册信息*/
	$("#menu li").hover(function(){
		$(this).children().eq(0).show().parent().siblings().children(0).hide()
		var index = $(this).index();
			$("#content .list").eq(index).show().siblings().hide(); 
		
	})
	/*注册验证*/
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;var flag5=false;
	/*用户名*/
	
$("#inp1").keyup(function(){
	var val=$(this).val()
	var reg=/^\w{3,15}$/
	var reg1=/^[0-9]{3,15}$/
	if(reg.test(val)){
	$("#tip1").show()
	 flag1=true;
	if(reg.test(val)){
		$("#tip1").show().html("用户名正确")
		if(reg1.test(val)){
			$("#tip1").show().html("用户名不能为纯数字")
				}
		
			}
		}

else{
	$("#inp1").show().html("用户名输入不正确")
	
	flag1=false; 
}
})
/*密码*/
$("#inp2").keyup(function(){
	var val=$(this).val()
	var reg=/^\w{6,20}$/
	if(reg.test(val)){
		 flag2=true;
		 $("#tip2").show().html("密码正确")
		
	}
	else{
		 flag2=false;
		 $("#tip2").show().html("密码不正确")
	}
})
	
	/*重复密码*/
$("#inp3").keyup(function(){
	var val=$(this).val()
	
	if(val==$("#inp2").val()){
		 flag3=true;
		 $("#tip3").show().html("密码一致")
		
	}
	else{
		 flag3=false;
		 $("#tip3").show().html("密码不正确")
	}
})	
	
 //加载生成验证码方法
	    
	      $.idcode.setCode();   //加载生成验证码方法
	    
	    $("#Txtidcode").click(function(){
	    	
	        var IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
	       	
	        if(IsBy){
	            $("#tip4").show().html("验证码正确")
	             flag4=true;
	        }else {
	           $("#tip4").show().html("验证码不正确")
	            flag4=false;
	        }
	    })
	    /*打钩*/
	  
	    /*注册*/
$("#inp5").click(function(){    
        var username = $("#inp1").val() 
        var pwd = $("#inp2").val()

        //ajax
        var xhr = new XMLHttpRequest();
        xhr.open("post", "http://localhost/hangouwangone/register/php/register.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("username="+ username + "&pwd="+ pwd);
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                  console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);

                if (obj.status == 1) {
                    //登录成功
                    alert(obj.msg);
                    location.href="../../login/html/login.html"

                    //跳转到首页
                }
                else {
                    //登录失败
                    alert(obj.msg);
                }
            }
        }
})

})