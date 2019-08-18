$(function(){
	$('.fzw_ul>li').hover(function(){
		$(this).addClass('fzw_bottom');
		$(this).siblings().removeClass('fzw_bottom');
		$(this).children().children().css({
			'transform': 'rotate(180deg)',
			'transition':' 0.2s'
		});
		$(this).siblings().children().children().css({
			'transform': 'rotate(0deg)',
			'transition':' 0.2s'
			});	
		},function(){		
			$(this).children().children().css({
				'transform': 'rotate(0deg)',
				'transition':' 0.2s'
			});
		});
	$('.fzw_one').hover(function(){
		$('.fzw_one').css('display','block');
	},function(){
		$('.fzw_one').css('display','none');
	});
	$('.fzw_two').hover(function(){
		$('.fzw_two').css('display','block');
	},function(){
		$('.fzw_two').css('display','none');
	});
	$('.fzw_three').hover(function(){
		$('.fzw_three').css('display','block');
	},function(){
		$('.fzw_three').css('display','none');
	});
	$('.fzw_four').hover(function(){
		$('.fzw_four').css('display','block');
	},function(){
		$('.fzw_four').css('display','none');
	});
	$('.fzw_five').hover(function(){
		$('.fzw_five').css('display','block');
	},function(){
		$('.fzw_five').css('display','none');
	});
	
	
	
	$('.fzw_li_one').hover(function(){
		$('.fzw_one').css('display','block');
	},function(){
		$('.fzw_one').css('display','none');
	});
	$('.fzw_li_two').hover(function(){
		$('.fzw_two').css('display','block');
	},function(){
		$('.fzw_two').css('display','none');
	});
	$('.fzw_li_three').hover(function(){
		$('.fzw_three').css('display','block');
	},function(){
		$('.fzw_three').css('display','none');
	});
	$('.fzw_li_four').hover(function(){
		$('.fzw_four').css('display','block');
	},function(){
		$('.fzw_four').css('display','none');
	});
	$('.fzw_li_five').hover(function(){
		$('.fzw_five').css('display','block');
	},function(){
		$('.fzw_five').css('display','none');
	});
	
	$('.fzw_top').click(function(){
		$('body,html').animate({
			'scrollTop':'0'
		},1000)
	});
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if($(this).scrollTop()>($('.fzw_xl_ul').offset().top-$(window).height())){
			$('.fzw_top').css('display','block');
		}else{
			$('.fzw_top').css('display','none');
		}
	});
})