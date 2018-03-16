$(function() {

	$("#dingbu").click(function() {

		$("html,body").scrollTop(0);
	})
	/*二级菜单移动*/
	$("#mar-01").hover(function() {
			$(this).animate({
				"margin-left": 15
			})
		},
		function() {
			$(this).stop().animate({
				"margin-left": 0
			})
		}
	)
	$("#mar-02").hover(function() {
			$(this).stop().animate({
				"margin-left": 15
			})
		},
		function() {
			$(this).stop().animate({
				"margin-left": 0
			})
		}
	)
	$("#mar-03").hover(function() {
			$(this).stop().animate({
				"margin-left": 15
			})
		},
		function() {
			$(this).stop().animate({
				"margin-left": 0
			})
		}
	)
	$("#mar-04").hover(function() {
			$(this).stop().animate({
				"margin-left": 15
			})
		},
		function() {
			$(this).stop().animate({
				"margin-left": 0
			})
		}
	)
	$("#mar-05").hover(function() {
			$(this).stop().animate({
				"margin-left": 15
			})
		},
		function() {
			$(this).stop().animate({
				"margin-left": 0
			})
		}
	)
	/*二级菜单*/
	$("#mar-01").hover(function() {
			$(".list-one").show()
		},
		function() {
			$(".list-one").hide()
		}
	)

	$("#all").hover(function() {
			$(".alllist").show()
		},
		function() {
			$(".alllist").hide()
		})
	/*城市三级联动*/

	$("#sjld").sjld("#shenfen", "#chengshi", "#quyu");

	/*商品详情*/

})