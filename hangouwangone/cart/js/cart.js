$(function() {

	//电商购物的流程：
	//淘宝：  在商品详情页面加入购物车 -> 查看购物车 -> 点击结算 
	//  	-> 进入订单页面（包括购物车的所有商品， 收货地址， 联系电话， 发票信息， 支付方式， 价格等..）
	//		-> 去支付				

	//刷新， 重新从cookie中获取最新的数据，并用节点显示
	refreshUI();

	function refreshUI() {

		//获取购物车cookie商品
		var arr = $.cookie("cart");
		console.log(arr)
		if(arr) {
			//如果数组不为undefined,则解析
			arr = JSON.parse(arr);

			//先移除旧节点
			$("#list").empty();

			//然后再显示最新的cookie数据
			//创建节点， 显示购物车商品
			var totals = 0;
			//新添加
			var allnum=0;
			for(var i = 0; i < arr.length; i++) {
				var obj = arr[i];

				//创建li
				var li = $("<li></li>").appendTo("#list");

				if(obj.checked) {
					$('<input class="ckbox" type="checkbox" checked="checked" />').appendTo(li);
				} else {
					$('<input class="ckbox" type="checkbox" />').appendTo(li);
				}

				$("<p class='sanme'>" + obj.sname + "</p>").appendTo(li);
				$('<img class="img" src="' + obj.img + '" >').appendTo(li);
				$('<span class="title">' + obj.title + '</span>').appendTo(li);
				$('<span class="price">' + obj.unit + obj.shopprice + '</span>').appendTo(li);
				$('<input class="add" type="button" value="+" />').appendTo(li);
				$('<input class="num" type="text" value=' + obj.num + '>').appendTo(li);
				$('<input class="reduce" type="button" value="-" />').appendTo(li);
				$("<span class='prices'>" + (obj.shopprice * obj.num).toFixed(2) + "</span>").appendTo(li);
				$('<a class="del" href="javascript:;">删除</a>').appendTo(li);

				//将勾选的商品价格进行累加
				if(obj.checked) {
					totals += obj.shopprice * obj.num;
					allnum+=obj.num;
					//console.log(prices)
								$(".tip").html(allnum);
								$.cookie("jianshu",JSON.stringify($(".tip").html()),{expires:30,path:"/"})
					
				}
				 console.log($.cookie("jianshu"))
			}
			
			//显示总价 
			
			$("#total").html(totals.toFixed(2));

		} else {
			console.log("您还没有买过商品，请先移步到首页购买商品");
		}
	}

	//删除
	$("#list").on("click", ".del", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index("#list .del");

		//修改cookie
		cookieArr.splice(index, 1);

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//判断是否全选了
		isAllChecked();

		//刷新UI
		refreshUI();
	});

	//+
	$("#list").on("click", ".add", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index("#list .add");

		//修改cookie
		cookieArr[index].num++;

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

	//-

	$("#list").on("click", ".reduce", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index("#list .reduce");

		//修改cookie
		cookieArr[index].num--;
		if(cookieArr[index].num <= 0) {
			cookieArr[index].num = 1;
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		/*
		 * add by laowang-20171103
		 */
		
		//刷新UI
		refreshUI();
	})

	//勾选
	$("#list").on("click", ".ckbox", function() {
		//获取原来的cookie
		var cookieArr = JSON.parse($.cookie("cart"));
		var index = $(this).index("#list .ckbox");

		//修改cookie
		cookieArr[index].checked = !cookieArr[index].checked;

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//判断是否全选了
		isAllChecked();

		//刷新UI
		refreshUI();
	})

	//判断是否全选了
	isAllChecked();

	function isAllChecked() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));

		var sum = 0;
		for(var i = 0; i < cookieArr.length; i++) {
			sum += cookieArr[i].checked;
		}

		//全选了
		if(cookieArr.length != 0 && sum == cookieArr.length) {
			$("#allCheck").prop("checked", true);
		} else { //没有全选
			$("#allCheck").prop("checked", false);
		}

	}

	//全选
	$("#allCheck").click(function() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));
		//console.log($(this).prop("checked"));

		//遍历cookieArr
		for(var i = 0; i < cookieArr.length; i++) {

			if($(this).prop("checked")) {
				cookieArr[i].checked = true; //全选
			} else {
				cookieArr[i].checked = false; //全不选
			}
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

	//删除选中
	$("#delSelect").click(function() {
		//如果没有cookie,则直接返回
		if(!$.cookie("cart")) {
			return;
		}
		var cookieArr = JSON.parse($.cookie("cart"));

		//遍历cookieArr
		var newArr = [];
		for(var i = 0; i < cookieArr.length; i++) {
			if(cookieArr[i].checked == false) {
				newArr.push(cookieArr[i]);
			}
		}

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(newArr), {
			expires: 30,
			path: "/"
		});

		//刷新UI
		refreshUI();
	})

	if(getCookie("username1")) {
		$("#username01").html(getCookie("username1"))

	}
	console.log(getCookie("username1"))

}) 