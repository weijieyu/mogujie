//
$(function(){
	yu.css()
	setTimeout(function(){
		yu.app.primary()//首页轮播
	},2000)
	yu.app.slide()//fixed图标
	yu.app.lazyLoad()//图片懒加载
	yu.app.hover()//兼容实现hover
	yu.app.searCon()//搜索框范围限定
})
var yu = {}
yu.ul = {}
yu.app = {}
yu.css = {}

yu.css = function () {
	var clientW = document.documentElement.clientWidth

	/* 后期改变样式 */
	var priColor = ['#FFEC13','#D3EBDE','#FF65AE','#FFF073','#F0E0D3','#ACCC9B']
	$('#figure a').css('width',clientW).css('left',(1200-clientW)/2).each(function(i,elem){
		$(elem).css('backgroundColor',priColor[i])
	})//设置a链接对应背景色
	var disUrl = ['img/c1.jpg','img/c2.jpg','img/c3.jpg']//primary区打折商品图片
	$('#discount p').each(function(i,ele){
		$(ele).css('backgroundImage','url('+disUrl[i]+')')
	})

	/* 结构性样式 */
	$('#slide').css('right',(clientW-1200)/2 - 55)//设置侧边fixed的定位
	$('#slide a').eq(3).css('visibility','hidden')//隐藏置顶图标
	$('.int').each(function(i,elem){//设定recomment中li的位置
		$(elem).find('li').eq(0).css('marginLeft',0)
		$(elem).find('li').eq(5).css('marginLeft',0)
	})
	var dlT = [-9,-100,-168,-206,-138,-70,-2]
	$('#goods dl').each(function(i,elem){//设定primary中的dl位置
		if (i < 3) {
			$(elem).css('top',dlT[i])
		} else {
			$(elem).css('bottom',dlT[i])
		}
	})

	var reH2 = [-80,-120,-280,-160,-200,-320,-240]
	$('.recommend h2').each(function(index,elem){//设置推荐标题的背景位置
		$(elem).css('backgroundPosition','0 '+reH2[index]+'px')
	})

	$('#figure a').css('backgroundPosition',(clientW-1200)/2+238+'px 0')//轮播图布局
}
yu.app.primary = function () {//轮播图
	var iNow = 0
	var $obj = $('#figure a')
	var interT = 3000
	var fadeT = 500
	var $title = $('#figure span')
	var timer 
	auto()
	function auto() {
		timer = setInterval(function() {//自动执行
			change()
		}, interT)
	}
	function change(reduce) {//变化函数
		$obj.eq(iNow).attr('class', 'Nowshow').fadeOut(fadeT)
		if (!reduce && iNow == $obj.size() - 1) {
			iNow = 0
		} else if (reduce && iNow == 0) {
			iNow = $obj.size() - 1
		} else {
			reduce?iNow--:iNow++
		}
		$obj.eq(iNow).attr('class', 'Nextin').fadeIn(fadeT)
		$title.attr('class', '')
		$title.eq(iNow).attr('class', 'now')
	}
	$('#figure img').on('mouseover',function(){//移入停止，移出继续
		clearInterval(timer)
	}).on('mouseout',function(){
		auto()
	})	
	$('#figure p').eq(0).click(function(){//点击后退按钮
		clearInterval(timer)
		change(true)
		auto()
	})
	$('#figure p').eq(1).click(function(){//点击前进按钮
		clearInterval(timer)
		change()
		auto()
	})
	$('#figure span').on('mouseover',function(){//移入移除小圆点
		var lNum = $(this).index()
		clearInterval(timer)
		$obj.eq(iNow).attr('class', 'Nowshow').fadeOut(fadeT)
		$obj.eq(lNum).attr('class', 'Nextin').fadeIn(fadeT)//图片淡入
		$title.attr('class', '')//相关span
		$title.eq(lNum).attr('class', 'now')
		iNow = lNum
	}).on('mouseout',function(){//移除继续轮播
		auto()
	})
}
yu.app.slide = function () {//fixed图标
	var pos = [
		[0,-70],[0,-35],[0,-175],[0,0]
	]
	var hoPos = [
		[0,-70],[-35,-35],[0,-140],[-35,0]
	]
	$('#slide a').each(function(i,elem){//设定图标位置
		$(elem).css('backgroundPosition',pos[i][0]+'px '+pos[i][1]+'px')
	})
	$('#slide a').on('mouseover',function(){//鼠标移入位置变化
		var i = $(this).index()
		$(this).css('backgroundPosition',hoPos[i][0]+'px '+hoPos[i][1]+'px')
	})
	$('#slide a').on('mouseout',function(){//鼠标移出复原 
		var i = $(this).index()
		$(this).css('backgroundPosition',pos[i][0]+'px '+pos[i][1]+'px')
	})
	window.onscroll = function () {//只要滚动距离为零就隐藏置顶图标，反之
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop) {
			$('#slide a').eq(3).css('visibility','visible')
		} else {
			$('#slide a').eq(3).css('visibility','hidden')
		}
	}
	$('#slide a').eq(3).click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0
	})
}
yu.app.lazyLoad = function () {//懒加载
	var clientH = document.documentElement.clientHeight
	$(window).scroll(function(){
		var scrollT = $(document).scrollTop()
		$('.recommend').each(function(index,elem){
			if ($(elem).offset().top < clientH + scrollT + 40 && !$(elem).attr('load')) {
				$(elem).find('img').each(function(index,elem){
					$(elem).attr('src',$(elem).attr('data-src'))
				})
				$(elem).attr('load',true)
			}
		})
	})
}
yu.app.hover = function () {//兼容实现hover效果
	$('.phone').on('mouseover',function(){
		$(this).find('p').css('display','block')
	}).on('mouseout',function(){
		$(this).find('p').css('display','none')
	})
}
yu.app.searCon = function () {//搜索框范围选定
	$('#search em').click(function(){
		$('#search span').html('搜'+$(this).html())
		$('#search em').css('display','none').css('color','')
		$(this).css('color','black')
		setTimeout(function(){
			$('#search em').css('display','')
		},20)
	})
}