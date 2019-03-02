$(document).ready(function(){
//图片轮播
	//获取图片
	var img=$(".banner .img img");
	//获取切换块
	var ul=$(".banner .change ul");
	for(i=0;i<img.length;i++){
		ul.append("<li></li>");
	};
	var li=$(".banner .change ul li");
	//申明变量显示图片
	
	var now=0;
	li.first().addClass("white");
	ul.width(30*img.length-10);
	//申请时间变量
	var banner_time;
	//切换函数
	function changeBanner(){
		now++;
		if(now>img.length-1){
			now=0;
		};
		img.eq(now).addClass("now").fadeTo("slow",1).siblings().removeClass("now").fadeTo("slow",0);
		li.eq(now).addClass("white").siblings().removeClass("white");
	}
	//用时间循环函数，使图片随时间切换
	banner_time=setInterval(function(){changeBanner()},3000);
	li.mouseover(function(){
		clearInterval(banner_time);
		now=$(this).index()-1;
		img.eq(now).siblings().stop(true,false);
		changeBanner();
		banner_time=setInterval(function(){changeBanner()},3000);
	})
//商品自动切换
	//获取种类
	var num=$(".hot_one .num li");
	//获取详细商品
	var shop=$(".hot_one .shop li");
	//申明变量显示边框
	var list=0;
	//申明时间变量
	var shop_time;
	//切换函数
	function changeList(){
		list++;
		if(list>num.length-1){
			list=0;
		};
		num.eq(list).addClass("bor").siblings().removeClass("bor");
		shop.eq(list).addClass("shop_show").siblings().removeClass("shop_show");
	}
	//用时间循环函数，使商品随时间切换
	shop_time=setInterval(function(){changeList()},2000);
	num.mouseover(function(){
		clearInterval(shop_time);
		list=$(this).index()-1;
		changeList();
	}).mouseout(function(){
		shop_time=setInterval(function(){changeList()},2000);
	});
	
	
	/*-------------------------------*/
	var shop_bar=$(".shop_bar");
	
	shop_bar.css("top",($(window).height()-shop_bar.height())/2);
})
