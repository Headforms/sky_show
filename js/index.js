//导航
$(function(){
	$('.dh-a-none').css('display','none')
	$('.dh-a-d').hover(function(){
	$('.dh-a-none').css('display','block');
	$('.dh-a-d').css('background','#FFF');
	$('.dh-a-d a').css('color','#ff6700');
			})
	$('.dh-a-d').mouseleave(function(){
	$('.dh-a-none').css('display','none');
	$('.dh-a-d').css('background','#ff6700');
	$('.dh-a-d a').css('color','#FFF');
						})
					})
$(function(){
	$('.dh-b-b-div').css('display','none');
	$('.dh-b-b li').hover(function(){
	$('.area-div').css('display','none');
	$(this).children('.dh-b-b-div').css('display','block');
			})
	$('.dh-b-b li').mouseleave(function(){
		$('.dh-b-b-div').css('display','none');
		})
	})
//轮播
$(function(){
	$('.area-div').css('display','none');
	$('.area-li').hover(function(){
		$('.area-div').css('display','none');
		$(this).children('.area-div').css('display','block');
		})
	$('.area-ul').mouseleave(function(){
		$('.area-div').css('display','none');
		})
	})
//轮播B
$(function(){
	$('.lubxb-r').click(function(){
		$('.lubxb-b ul').removeClass('huadong-l');
		$('.lubxb-b ul').addClass('huadong-r');
		})
	$('.lubxb-l').click(function(){
		$('.lubxb-b ul').addClass('huadong-l');
		})
	})
//家电
$(function(){
	$('.jd-c-l img').hover(function(){
		$(this).addClass('fudong');
		$(this).removeClass('qxfudong')
	})
	$('.jd-c-l img').mouseleave(function(){
		$('.jd-c-l img').addClass('qxfudong')
	})
	$('.jd-c-r li').hover(function(){
		$(this).addClass('fudong');
		$(this).children('.nr-pj').addClass('ss');
		$(this).children('.nr-pj').removeClass('xj');
		$(this).removeClass('qxfudong')
	})
	$('.jd-c-r li').mouseleave(function(){
		$(this).addClass('qxfudong')
		$(this).children('.nr-pj').addClass('xj');
	})
		$('.jju').css('display','none');	
		$('.dsyy').css('display','none');
		$('.dn').css('display','none');
		$('.rm').css('display','block');
		$('.jd-b li').hover(function(){
		$text = $(this).text();
		if($text=="热门"){
					$('.jju').css('display','none');
					$('.dsyy').css('display','none');
					$('.dn').css('display','none');
					$('.rm').css('display','block');
				}else if($text=="电视影音"){
					$('.jju').css('display','none');
					$('.rm').css('display','none');
					$('.dn').css('display','none');
					$('.dsyy').css('display','block');
				}else if($text=="电脑"){
					$('.jju').css('display','none');
					$('.rm').css('display','none');
					$('.dn').css('display','block');
					$('.dsyy').css('display','none');
				}else if($text=="家居"){
					$('.jju').css('display','block');
					$('.rm').css('display','none');
					$('.dn').css('display','none');
					$('.dsyy').css('display','none');
				}	
			})
		})
		
//热评产品
	$(function(){
		$('.recp-a li').hover(function(){
			$(this).addClass('fudong');
			$(this).removeClass('qxfudong')
		})
		$('.recp-a li').mouseleave(function(){
			$(this).addClass('qxfudong')
		})
	
	})
	
//内容
$(function(){
	$(".nr-li").hover(function(){
		$(this).children('.img_gallery').children('.main_img').children('a').fadeIn();
		$(this).addClass('fudong');
		$(this).removeClass('qxfudong');
	},function(){
		$(this).children('.img_gallery').children('.main_img').children("a").fadeOut();
	});
	$(".nr-li").mouseleave(function(){
		$(this).addClass('qxfudong');
		$(this).removeClass('fudong');
	})
	$dragBln = false;
	
	$(".main_img").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".point a"),
		counter : function (e){
			$(".point a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".main_img").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".img_gallery").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".main_img").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	

//11111111
	$(".nr-li").hover(function(){
		$(this).children('.img_gallery1').children('.main_img1').children('a').fadeIn();
		$(this).addClass('fudong');
		$(this).removeClass('qxfudong');
	},function(){
		$(this).children('.img_gallery1').children('.main_img1').children("a").fadeOut();
	});
	$(".nr-li").mouseleave(function(){
		$(this).addClass('qxfudong');
		$(this).removeClass('fudong');
	})
	$dragBln = false;
	$(".main_img1").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev1"),
		btn_next : $("#btn_next1"),
		paging : $(".point1 a"),
		counter : function (e){
			$(".point1 a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font1 span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".main_img1").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img1").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img1 a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next1").click();
	}, 5000);
	
	$(".img_gallery1").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next1").click();
		},5000);
	});
	
	$(".main_img1").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next1").click();
		}, 5000);
	});
	
//222222

		$(".nr-li").hover(function(){
		$(this).children('.img_gallery2').children('.main_img2').children('a').fadeIn();
		$(this).addClass('fudong');
		$(this).removeClass('qxfudong');
	},function(){
		$(this).children('.img_gallery2').children('.main_img2').children("a").fadeOut();
	});
	$(".nr-li").mouseleave(function(){
		$(this).addClass('qxfudong');
		$(this).removeClass('fudong');
	})
	$dragBln = false;
	$(".main_img2").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev2"),
		btn_next : $("#btn_next2"),
		paging : $(".point2 a"),
		counter : function (e){
			$(".point2 a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font2 span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".main_img2").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img2").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img2 a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next2").click();
	}, 5000);
	
	$(".img_gallery2").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next2").click();
		},5000);
	});
	
	$(".main_img2").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next2").click();
		}, 5000);
	});
		
//3333333

		$(".nr-li").hover(function(){
		$(this).children('.img_gallery3').children('.main_img3').children('a').fadeIn();
		$(this).addClass('fudong');
		$(this).removeClass('qxfudong');
	},function(){
		$(this).children('.img_gallery3').children('.main_img3').children("a").fadeOut();
	});
	$(".nr-li").mouseleave(function(){
		$(this).addClass('qxfudong');
		$(this).removeClass('fudong');
	})
	$dragBln = false;
	$(".main_img3").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev3"),
		btn_next : $("#btn_next3"),
		paging : $(".point3 a"),
		counter : function (e){
			$(".point3 a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".img_font3 span").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".main_img3").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_img3").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_img3 a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next3").click();
	}, 5000);
	
	$(".img_gallery3").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next3").click();
		},5000);
	});
	
	$(".main_img3").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next3").click();
		}, 5000);
	});
	
});