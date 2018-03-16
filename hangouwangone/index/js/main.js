$(function(){
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
	/*顶部二级导航*/
	$("#menu .one").hover(function(){
		$("#menu .me").show().css({"background":"white"})
		
	},function(){
		$("#menu .me").hide() 
		
	});
	$(".me p").hover(function(){
		$(this).css({"color":" greenyellow"})
	},function(){
		$(this).css({"color":"#000"})
	})
	
	$("#menu .two").hover(function(){
		$("#menu .list-com").show().css({"background":"white"})
		
	},function(){
		$("#menu .me").hide() 
		
	});
	$(".list-com li").hover(function(){
		$(this).children().css({"color":" pink"})
	},function(){
		$(this).children().css({"color":"#000"})
	})
	
	
	
	
	
	
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
				
	//二级菜单
	
			
		var arr1 = [];		//ajax获取数据(轮播图)
		$.get("../js/luobotu.json", function(responseData){
		 obj = responseData;
			var arr = obj.lunbodata;
			arr1=obj.goodsdata;			
			/*首页跳转到商品详情*/		
			for(var i=0;i<arr1.length;i++){
			var obj1 = arr1[i];
			var li= $("<li></li>").appendTo("#techan");		
			$("<img src="+ obj1.img +" >").appendTo(li);

		}
		/*轮播*/	
			for (var i=0; i<arr.length; i++) {
						var obj = arr[i];
					
						$("<li><img src="+ obj.img +" ></li>").appendTo("#list4");
						var li = $("<li></li>").appendTo("#list5");
						if (i==0) {
							li.addClass("active");
						}
					}
					 
					//轮播
					lunbo();
					
						
				})
				
				//on事件委托给li添加事件
				$("#techan").on("click", "li", function(){
					var index = $(this).index(); //li下标
					
					var obj1 = arr1[index]; //所点击的商品数据
					//console.log(obj.id);
					
					//跳转到详情
					location.href = "../../detail/html/detail.html?id=" + obj1.id
					
				})
			
		
				//轮播
				function lunbo(){
					
					//jq轮播图
					var list1 = $("#list4");
					var list2 = $("#list5");
					var li1 = $("#list4 li");
					var li2 = $("#list5 li");
					
					//复制第一张图到最后
					li1.first().clone(true).appendTo(list1);
					
					//
					var size = $("#list4 li").size();
					list1.width(1920*size);
					
					//开启定时器
					var i = 0;
					var timer = setInterval(function(){
						i++;
						move();
					}, 2000);
					
					function move(){
						
						if (i < 0) {
							list1.css("left", 1920*(size-1));
							i = size-2;
						}
						
						if (i >= size){
							list1.css("left", 0);
							i = 1;
						}
						
						list1.stop().animate({left:-i*1920}, 500);
						
						li2.eq(i).addClass("active").siblings().removeClass("active");
						if (i == size-1) {
							li2.eq(0).addClass("active").siblings().removeClass("active");
						}
					}
					
					//上一页
					$("#prev").click(function(){
						i--;
						move();
					})
					
					//下一页
					$("#next").click(function(){
						i++;
						move();
					})
					
					li2.mouseenter(function(){
						i = $(this).index();
						move();
					})
					
					$("#banner-wrapper").hover(function(){
						console.log("mouseenter");
						clearInterval(timer);
					}, 
					function(){
						console.log("mouseleave");
						timer = setInterval(function(){
							i++;
							move();
						}, 2000);
					})
				
				}

	$(".first").hover(function(){
		$(this).find("img").eq(0).stop(true).animate({marginLeft:3},300).parent().siblings().stop(true).animate({marginLeft:0}, 300)
		
	},
	function(){
		$(this).find("img").eq(0).stop(true).animate({marginLeft:0},300).parent().siblings().stop(true).animate({marginLeft:3}, 300)
	
	})

$(".ser img").hover(function(){
		$(this).stop(true).animate({marginLeft:3},300).siblings().stop(true).animate({marginLeft:0}, 300)
		
	},
	function(){ 
		$(this).stop(true).animate({marginLeft:0},300).siblings().stop(true).animate({marginLeft:3}, 300)
	
	})
$(".third").hover(function(){
		$(this).find("img").eq(0).stop(true).animate({marginLeft:3},300).parent().siblings().stop(true).animate({marginLeft:0}, 300)
		
	},
	function(){ 
		$(this).find("img").eq(0).stop(true).animate({marginLeft:0},300).parent().siblings().stop(true).animate({marginLeft:3}, 300)
	
	})


/*油粮杂货区,改变字体颜色*/
$(".you").hover(function(){
	$(this).css({color:"green"})
	
},function(){
	$(this).css({color:"#000"})
	
})
/*透明*/
//		$("#food").mouseenter(function(){
//			$(this).children().animate(300).css({"z-index":2,"opacity":0.1}) 
//		})
//		$("#food").mouseleave(function(){
//			$(this).children().animate(300).css({"z-index":-1,"opacity":1})
//		})
		
/**杂货粮油**/
$("#food2").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#food2").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
$("#food3").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#food3").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
/*蔬菜区*/
$("#fruit2").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#fruit2").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
$("#fruit3").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#fruit3").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})

			
/*食品零食区*/
$("#shipin2").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#shipin2").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
$("#shipin3").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#shipin3").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
/*蛋奶速食区*/
$("#egg2").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#egg2").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
$("#egg3").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#egg3").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
/*酒水区*/
$("#water2").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#water2").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})
$("#water3").on("mouseenter","dd",function(){
	$(this).find("img").stop().animate({width:190,height:200})
			
})
$("#water3").on("mouseleave","dd",function(){
	$(this).find("img").stop().animate({width:160,height:180})
		
})

/*首页点击跳到商品详情*/


if(getCookie("username1")){  
    $("#username001").html(getCookie("username1"))
$(".login").hide()
}else{
	$(".login").show()
}
 


})
	
			