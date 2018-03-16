onload = function() {

	function $(id) {
		return document.getElementById(id);
	}

	//在中等图上移动
	$("middleImg").onmousemove = function(e) {
		e = e || event;

		//显示中等区域和大区域
		$("middleArea").style.display = "block";
		$("bigArea").style.display = "block";

		//放大系数
		var scale = $("bigImg").offsetHeight / $("middleImg").offsetHeight;

		//计算小区域跟随鼠标移动
		var x = e.pageX - $("box").offsetLeft - $("middleImg").offsetLeft - $("middleArea").offsetWidth / 2;
		var y = e.pageY - $("box").offsetTop - $("middleImg").offsetTop - $("middleArea").offsetHeight / 2;

		//判断边界
		if(x <= 0) x = 0;
		else if(x >= $("middleImg").offsetWidth - $("middleArea").offsetWidth) {
			x = $("middleImg").offsetWidth - $("middleArea").offsetWidth
		}
		if(y <= 0) y = 0;
		else if(y >= $("middleImg").offsetHeight - $("middleArea").offsetHeight) {
			y = $("middleImg").offsetHeight - $("middleArea").offsetHeight
		}
		//移动中等区域
		$("middleArea").style.left = x + 'px';
		$("middleArea").style.top = y + 'px';

		//移动大图
		$("bigImg").style.left = -x * scale + "px";
		$("bigImg").style.top = -y * scale + "px";

	}

	//移出中等图片
	$("middleImg").onmouseleave = function() {
		//隐藏中等区域和大区域

		$("middleArea").style.display = "none";
		$("bigArea").style.display = "none";
	}

	//点击小图片
	var ali = $("small").getElementsByTagName("li");
	for(var i = 0; i < ali.length; i++) {
		ali[i].onmouseenter = function() {
			this.style.border = "2px solid red"
			var src = this.children[0].getAttribute("src");
			$("middleImg").children[0].src = src.replace('_1', '_2');
			$("bigImg").src = src.replace('_1', '_3');
		}
		ali[i].onmouseleave = function() {
			this.style.border = "2px solid #ccc"
		}
	}

}
/*商品详情*/
$(function() {

	//先获取商品的id
	var params = location.search;
	console.log(params); //"?id=103&w=22"
	var myId = getParam(params, "id");
	//console.log(myId);

	var myObj = {};
	//获取json中匹配id的商品数据
	$.get("../js/detail.json", function(responseDate) {

		var arr = responseDate.goodsdata;
		console.log(arr);
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
			console.log(obj);
			if(obj.id == myId) {
				//obj对象就是当前商品详情的数据
				myObj = {
					id: obj.id,
					title: obj.title,
					mark: obj.mark,
					shop: obj.shop,
					sname: obj.sname,
					markprice: obj.markprice,
					unit: obj.unit,
					shopprice: obj.shopprice,
					img: obj.img,
					num: 1, //商品数量
					checked: true //选中状态
				}
				//	console.log(myObj.price)
				//刷新页面的一部分
				refreshUI(obj);
			}
		}
	})

	//刷新页面的一部分
	function refreshUI(obj) {
		$(".img1").attr("src", obj.img1);
		$(".mark").html(obj.mark);
		$(".markprice").html(obj.markprice);
		$(".shop").html(obj.shop);
		$(".unit").html(obj.unit);
		$(".shopprice").html(obj.shopprice);
		$(".grade").html(obj.grade);
		$(".tall").html(obj.tall);

	}

	//获取参数字符串paramStr中的参数name
	function getParam(paramStr, name) {
		paramStr = paramStr.substring(1); //id=103&w=22
		var arr = paramStr.split("&");
		for(var i = 0; i < arr.length; i++) {
			var str2 = arr[i]; //id=103

			var arr2 = str2.split("=");
			if(arr2[0] == name) {
				return arr2[1];
			}
		}
		return "";
	}
	//加入购物车；
	var n = 1;
	var s = $("#num").val();
	$("#add").click(function() {
		n++;
		console.log(n);
		$("#num").val(n);
		myObj.num = n;
	})
	$("#reduce").click(function() {
		n--;
		if(n < 0) {
			n = 0;
		}
		console.log(n);
		$("#num").val(n);
		myObj.num = n;

	})

	
	//	//建立cookies加购物车;
	$(".intocart").click(function() {
		//取出其中一部分数据并保存到另一个对象myObj中

		//使用cookie
		//获取原来保存在cookie中的购物车商品， 如果没有商品则将数组cookieArr设置为空数组[]
		var cookieArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];

		//遍历原来cookie中是否存在和当前即将加入购物车的商品相同
		var isExist = false; //表示是否存在相同商品
		for(var i = 0; i < cookieArr.length; i++) {
			if(cookieArr[i].id == myObj.id) {
				//存在相同商品
				//console.log($("#num").val());
				cookieArr[i].num += $("#num").val() - 0;
				isExist = true; //表示存在相同商品

			}
		}
		//如果不存在相同商品， 则添加当前商品
		if(!isExist) {
			cookieArr.push(myObj);
		}

		//添加(替换原来的)cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});
		console.log($.cookie("cart"));

	})

	if(getCookie("username1")) {
		$("#username001").html(getCookie("username1"))
		$(".login").hide()
	} else {
		$(".login").show()

	}
	
})