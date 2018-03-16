$(function(){
	$("#mar-01").hover(function(){
		$(this).animate({"margin-left":15})
		$(this).css({color:"green","font-size":"18px"})
	},
	function(){
		$(this).stop().animate({"margin-left":0})
		$(this).css({color:"#000","font-size":"16px"})
	}
	)
	$("#mar-02").hover(function(){
		$(this).stop().animate({"margin-left":15})
		$(this).css({color:"green","font-size":"18px"})
	},
	function(){
		$(this).stop().animate({"margin-left":0})
		$(this).css({color:"#000","font-size":"16px"})
	}
	)
	$("#mar-03").hover(function(){
		$(this).stop().animate({"margin-left":15})
		$(this).css({color:"green","font-size":"18px"})
	},
	function(){
		$(this).stop().animate({"margin-left":0})
		$(this).css({color:"#000","font-size":"16px"})
	}
	)
	$("#mar-04").hover(function(){
		$(this).stop().animate({"margin-left":15})
	$(this).css({color:"green","font-size":"18px"})
	},
	function(){
		$(this).stop().animate({"margin-left":0})
		$(this).css({color:"#000","font-size":"16px"})
	}
	)
	$("#mar-05").hover(function(){
		$(this).stop().animate({"margin-left":15})
		$(this).css({color:"green","font-size":"18px"})
	},
	function(){
		$(this).stop().animate({"margin-left":0})
		$(this).css({color:"#000","font-size":"16px"})
	}
	)
/*二级菜单*/
$("#mar-01").hover(function(){
		$(".list1-one").show()
	},
	function(){
		$(".list1-one").hide()
	}
	)
$("#mar-02").hover(function(){
		$(".list2-one").show()
	},
	function(){
		$(".list2-one").hide()
	}
	);
	$("#mar-03").hover(function(){
		$(".list3-one").show()
	},
	function(){
		$(".list3-one").hide()
	}
	)
	/*控制用户变色*/
	$("#n-fixed .users").hover(function(){
	$(this).css({background:"green"})
	$(".huiyuan").show() ;
	
	},function(){
	$(this).css({background:"#666"})
	$(".huiyuan").hide() 
})
	$("#cart01").hover(function(){
		$(this).css({background:"green"}).parent().siblings().css({background:"#666"})
	},function(){
		$(this).css({background:"#666"})
	})

$("#dingbu").click(function(){
				
					$("html,body").scrollTop(0); 
				})

$(".peisong").hover(function(){
	$(this).css({"overflow":"visible"})
}, 
function(){
	$(this).css({"overflow":"hidden"})
}
)
$("#sjld").sjld("#shenfen","#chengshi","#quyu");
/*控制商品列表*/
$(".goods-into").hover(function(){
	$(this).css({"overflow":"visible"}) 
},function(){
	$(this).css({"overflow":"hidden"}) 
})


//商品列表
	var eggsId = 0;
	var foodsId = 0;
	var flag = 1;
	var list = $("#goods-list");
	refresh();
	function refresh(){
		$("#goods-list").html("")
		$.get("../js/goods.json",function(data){
			var obj = data;
			var arr = [];
			var arr2 = [];
			var arr3 = [];
			arr = obj.movies;
			if(eggsId == 0 && foodsId == 0){
				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);

				}

				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					//$("<li><img src="+ arr2[i].img +"/><p class='p1'>"+ arr2[i].name +"</p><p class='p1'>"+ arr2[i].price +"</p><span>"+ arr2[i].score +"</span></li>").appendTo("#goods-list")
					//$("<li><img src="+ arr2[i].img +"/><p class='p1'>"+ arr2[i].price +"<span class='price'>"+arr2[i].name+"</span></p><span>"+ arr2[i].score +"</span></li>").appendTo("#goods-list")
					var li=$("<li></li>").appendTo("#goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].price+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
			
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var e1=$("<em class='e1'>"+arr2[i].e1+"</em>").appendTo(p2)
					var p3=$("<p class='p3'><span>人气</span>"+arr2[i].hot+"</p>").appendTo(li)
				}
			}
			else if(eggsId != 0 && foodsId == 0){
				console.log(foodsId );
				for(var i=0;i<arr.length;i++){
					if(arr[i].egg == eggsId){
						arr2.push(arr[i]);
					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					//$("<li><img src="+ arr2[i].img +"/><p>"+ arr2[i].name +"</p><span>"+ arr2[i].score +"</span></li>").appendTo("#goods-list")
				var li=$("<li></li>").appendTo("#goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].price+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var e1=$("<em class='e1'>"+arr2[i].e1+"</em>").appendTo(p2)
					var p3=$("<p class='p3'><span>人气</span>"+arr2[i].hot+"</p>").appendTo(li)
					
				
				
				}
				
			}
			else if(eggsId == 0 && foodsId != 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].food == foodsId){
						arr2.push(arr[i]);
					};
				}
				console.log(flag)
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					//$("<li><img src="+ arr2[i].img +"/><p>"+ arr2[i].name +"</p><span>"+ arr2[i].score +"</span></li>").appendTo("#goods-list")
				
				var li=$("<li></li>").appendTo("#goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].price+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var e1=$("<em class='e1'>"+arr2[i].e1+"</em>").appendTo(p2)
					var p3=$("<p class='p3'><span>人气</span>"+arr2[i].hot+"</p>").appendTo(li)
					
				
				}
				
			}
			else{
				for(var i=0;i<arr.length;i++){
					
					if(arr[i].egg == eggsId && arr[i].food == foodsId  ){
						arr2.push(arr[i]);
						console.log(foodsId)

					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					//$("<li><img src="+ arr2[i].img +"/><p>"+ arr2[i].name +"</p><span>"+ arr2[i].score +"</span></li>").appendTo("#goods-list")
				
				var li=$("<li></li>").appendTo("#goods-list")
					var img=$("<img src="+ arr2[i].img +"/>").appendTo(li);
					var p1=$("<p class='p1'></p>").appendTo(li)
					var price=$("<span class='price'>"+arr2[i].unit+arr2[i].price+"</span>").appendTo(p1)
					var markprice=$("<span class='markprice'>"+arr2[i].unit+arr2[i].markprice+"</span>").appendTo(p1)
					var p2=$("<p class='p2'></p>").appendTo(li);
					var sp1=$("<span class='sp1'>"+arr2[i].name+"<span>").appendTo(p2)
					var e1=$("<em class='e1'>"+arr2[i].e1+"</em>").appendTo(p2)
					var p3=$("<p class='p3'><span>人气</span>"+arr2[i].hot+"</p>").appendTo(li)
					
				
				
				}
				
			}
			function paixu(flag,arr2){
				if (flag == 1) {
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].hot) < (arr2[j+1].hot)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				else if(flag == 2){
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].price-0) < (arr2[j+1].price-0)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
					console.log(arr2);
				}
				return arr2;
			}
			
		})
	}
	$(".list2-one .one").click(function(){
		
		var index=  $(this).index(".list2-one .one");
		//$(this).addClass("active").siblings("li").removeClass("active")

		eggsId = index;
		console.log(index);
		refresh()
	})
	$(".list3-one .two").click(function(){
		
		var index=  $(this).index(".list3-one .two");
		//$(this).addClass("active").siblings("span").removeClass("active")
		console.log(index);
		foodsId = index;
		refresh()
	})
	$(".paixu span").click(function(){
		flag = $(this).index()+1;
		console.log(flag);
		refresh()
	})

   
   
   
   


}) 