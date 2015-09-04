//主页内容配置，数据与结构分离，方便后期更改
$(function(){
	var header = {//搜索框提示内容
		"search": "小小行李箱承载大大的梦想"
	}
	$('#search input').eq(0).attr('placeholder',header.search)
	
	var goodsT = [//primary下左侧导航的标题对应的链接
		['http://www.mogujie.com/','衣服'],
		['http://www.mogujie.com/','鞋子'],
		['http://www.mogujie.com/','男友'],
		['http://www.mogujie.com/','包包'],
		['http://www.mogujie.com/','家居'],
		['http://www.mogujie.com/','配饰'],
		['http://www.mogujie.com/','美妆'],
	]
	$('#goods h2').each(function(i, elem){
		$(elem).html('<a href="'+goodsT[i][0]+'">'+goodsT[i][1]+'</a>')
	})

	var goodsC = [//primary下左侧导航的标题下内容对应的链接
		[['http://www.mogujie.com/','秋の新品'],/*第一栏*/
		['http://www.mogujie.com/','针织衫'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','时尚套装'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','风衣']],
		[['http://www.mogujie.com/','早秋推荐'],/*第二栏*/
		['http://www.mogujie.com/','运动'],
		['http://www.mogujie.com/','单鞋'],
		['http://www.mogujie.com/','帆布']],
		[['http://www.mogujie.com/','秋上新'],/*第三栏*/
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','休闲鞋'],
		['http://www.mogujie.com/','休闲裤']],
		[['http://www.mogujie.com/','初秋新品'],/*第四栏*/
		['http://www.mogujie.com/','双肩'],
		['http://www.mogujie.com/','斜挎'],
		['http://www.mogujie.com/','小包']],
		[['http://www.mogujie.com/','收纳'],/*第五栏*/
		['http://www.mogujie.com/','杂物'],
		['http://www.mogujie.com/','四件套'],
		['http://www.mogujie.com/','美发']],
		[['http://www.mogujie.com/','秋季新品'],/*第六栏*/
		['http://www.mogujie.com/','手表'],
		['http://www.mogujie.com/','项链'],
		['http://www.mogujie.com/','耳钉']],
		[['http://www.mogujie.com/','美妆精选'],/*第七栏*/
		['http://www.mogujie.com/','洁面'],
		['http://www.mogujie.com/','眼妆'],
		['http://www.mogujie.com/','套装']]
	]
	
	$('#goods li').each(function(index, elem) {
		var a = ''
		for (var i = 0; i < goodsC[index].length; i++) {
			a += '<a href="' + goodsC[index][i][0] + '">' + goodsC[index][i][1] + '</a>'
		} 
		$(elem)[0].innerHTML += a
	})
	
	var hidden1 = [/*第一栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫','hot'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙','hot'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动']
	]
	var hidden2 = [/*第二栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套','hot'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙','hot'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动']
	]
	var hidden3 = [/*第三栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装','hot'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动','hot']
	]
	var hidden4 = [/*第四栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装','hot'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动','hot']
	]
	var hidden5 = [/*第五栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装','hot'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动','hot']
	]
	var hidden6 = [/*第六栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装','hot'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动','hot']
	]
	var hidden7 = [/*第七栏对应的dl内容*/
		['dt','http://www.mogujie.com/','新品发布'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','牛仔外套'],
		['http://www.mogujie.com/','中秋连衣裙'],
		['http://www.mogujie.com/','打底裤'],
		['http://www.mogujie.com/','阔腿裤'],
		['http://www.mogujie.com/','破洞牛仔裤','hot'],
		['http://www.mogujie.com/','小脚裤'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','气质美裙'],
		['dt','http://www.mogujie.com/','本季热卖'],
		['http://www.mogujie.com/','T恤'],
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','半身裙','hot'],
		['http://www.mogujie.com/','牛仔裤'],
		['http://www.mogujie.com/','休闲裤'],
		['http://www.mogujie.com/','雪纺衫'],
		['http://www.mogujie.com/','开衫'],
		['http://www.mogujie.com/','韩范美裙'],
		['http://www.mogujie.com/','包臀裙'],
		['http://www.mogujie.com/','韩版'],
		['http://www.mogujie.com/','短裤'],
		['http://www.mogujie.com/','内衣套装','hot'],
		['dt','http://www.mogujie.com/','热门推荐'],
		['http://www.mogujie.com/','初秋睡衣'],
		['http://www.mogujie.com/','舒适短袜','hot'],
		['http://www.mogujie.com/','可爱内裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','复古连衣裙'],
		['http://www.mogujie.com/','优雅长裙'],
		['http://www.mogujie.com/','背带裤'],
		['http://www.mogujie.com/','情侣装','hot'],
		['http://www.mogujie.com/','韩国同款'],
		['http://www.mogujie.com/','闺蜜装'],
		['http://www.mogujie.com/','时髦运动','hot']
	]
	var hidden = []//将每栏都添加到一个总数组内，批量写入
	hidden.push(hidden1,hidden2,hidden3,hidden4,hidden5,hidden6,hidden7)
	$('#goods li').each(function(index, elem) {
		var a = ''
		for (var i = 0; i < hidden[index].length; i++) {
			if (hidden[index][i].length == 2) {
				a += '<dd><a href="' + hidden[index][i][0] + '">' + hidden[index][i][1] + '</a></dd>'
			} else if (hidden[index][i][2] == 'hot') {
				a += '<dd><a class="hot" href="' + hidden[index][i][0] + '">' + hidden[index][i][1] + '</a></dd>'
			} else {
				a += '<dt><a href="' + hidden[index][i][1] + '">' + hidden[index][i][2] + '</a></dt>'
			}
		}
		$(elem)[0].innerHTML += '<dl>'+a+'</dl>'
	})

	var figure = [//设定轮播图的链接和图片地址
		['http://www.mogujie.com/"','img/p1.jpg'],
		['http://www.mogujie.com/"','img/p2.jpg'],
		['http://www.mogujie.com/"','img/p3.jpg'],
		['http://www.mogujie.com/"','img/p4.jpg'],
		['http://www.mogujie.com/"','img/p5.jpg'],
		['http://www.mogujie.com/"','img/p6.jpg']
	]
	$('#figure a').each(function(index,elem){
		$(elem).attr('href',figure[index][0]).css('backgroundImage','url('+figure[index][1]+')')
	})

	var discount = [//打折区链接和说明文字
		['http://www.mogujie.com/','薇婷脱毛膏','7.0'],
		['http://www.mogujie.com/','Za美白防晒霜','8.0'],
		['http://www.mogujie.com/','博语去黑头三件套','6.4']
	]
	for (var i=0; i<discount.length; i++) {
		$('#discount')[0].innerHTML += '<p><a href="'+discount[i][0]+'">'+discount[i][1]+'</a><span>'+discount[i][2]+'</span></p>'
	}

	var sTop = [//添加开头special栏的链接
		['http://www.mogujie.com/"','img/s1.png'],
		['http://www.mogujie.com/"','img/s2.png'],
		['http://www.mogujie.com/"','img/s3.png'],
		['http://www.mogujie.com/"','img/s4.png']
	]
	for (var i=0; i<sTop.length; i++) {
		$('#sTop')[0].innerHTML += '<a href="'+sTop[i][0]+'"><img src="'+sTop[i][1]+'"></a>'
	}

	var sBtm = [//添加末尾special栏的链接
		['http://www.mogujie.com/"','img/s1.png'],
		['http://www.mogujie.com/"','img/s2.png'],
		['http://www.mogujie.com/"','img/s3.png'],
		['http://www.mogujie.com/"','img/s4.png']
	]
	for (var i=0; i<sTop.length; i++) {
		$('#sBtm')[0].innerHTML += '<a href="'+sBtm[i][0]+'"><img src="'+sBtm[i][1]+'"></a>'
	}

	var rNav = [//recommend栏对应的导航内容
		[['http://www.mogujie.com/','秋季热卖'],/*第一块*/
		['http://www.mogujie.com/','风衣'],
		['http://www.mogujie.com/','衬衫'],
		['http://www.mogujie.com/','卫衣'],
		['http://www.mogujie.com/','时尚套装'],
		['http://www.mogujie.com/','牛仔裤外套'],
		['http://www.mogujie.com/','更多']],
		[['http://www.mogujie.com/','初秋美裙'],/*第二块*/
		['http://www.mogujie.com/','连衣裙'],
		['http://www.mogujie.com/','裙子套装'],
		['http://www.mogujie.com/','针织裙'],
		['http://www.mogujie.com/','中袖连衣裙'],
		['http://www.mogujie.com/','衬衫群'],
		['http://www.mogujie.com/','背带裙'],
		['http://www.mogujie.com/','更多']],
		[['http://www.mogujie.com/','29.9元封顶'],/*第三块*/
		['http://www.mogujie.com/','手表'],
		['http://www.mogujie.com/','墨镜'],
		['http://www.mogujie.com/','项链'],
		['http://www.mogujie.com/','韩版帽'],
		['http://www.mogujie.com/','iphone壳'],
		['http://www.mogujie.com/','耳钉'],
		['http://www.mogujie.com/','更多']],
		[['http://www.mogujie.com/','初秋新品'],/*第四块*/
		['http://www.mogujie.com/','必备小脚裤'],
		['http://www.mogujie.com/','显瘦裤子榜'],
		['http://www.mogujie.com/','时尚哈伦裤'],
		['http://www.mogujie.com/','潮流阔腿裤'],
		['http://www.mogujie.com/','韩版短裤'],
		['http://www.mogujie.com/','更多']],
		[['http://www.mogujie.com/','单鞋'],/*第五块*/
		['http://www.mogujie.com/','凉鞋'],
		['http://www.mogujie.com/','运动鞋'],
		['http://www.mogujie.com/','平底鞋'],
		['http://www.mogujie.com/','帆布鞋'],
		['http://www.mogujie.com/','拖鞋'],
		['http://www.mogujie.com/','豆豆鞋']],
		[['http://www.mogujie.com/','夏装超值购'],/*第六块*/
		['http://www.mogujie.com/','显瘦裤'],
		['http://www.mogujie.com/','爆款潮鞋'],
		['http://www.mogujie.com/','超值美鞋'],
		['http://www.mogujie.com/','热销包袋'],
		['http://www.mogujie.com/','最新美包']],
		[['http://www.mogujie.com/','夏款'],/*第七块*/
		['http://www.mogujie.com/','双肩包'],
		['http://www.mogujie.com/','斜挎包'],
		['http://www.mogujie.com/','真皮包'],
		['http://www.mogujie.com/','大包'],
		['http://www.mogujie.com/','小包'],
		['http://www.mogujie.com/','更多']]
	]

	$('.rNav').each(function(index,elem){//设定recommend区内导航内容
		var a = ''
		for (var i=0; i<rNav[index].length; i++) {
			a += '<li><a href="'+rNav[index][i][0]+'">'+rNav[index][i][1]+'</a></li>'
		}
		$(elem).html(a)
	})

	var inte = [//recommend区主要内容
		[['http://www.mogujie.com/','img/jacket1.jpg','中袖翻领衬衣','118.00','34'],/*第一块*/
		['http://www.mogujie.com/','img/jacket2.jpg','复古赫本风针织衫','118.00','34'],
		['http://www.mogujie.com/','img/jacket3.jpg','长款透明防晒风衣','118.00','34'],
		['http://www.mogujie.com/','img/jacket4.jpg','学院风条纹衬衫','118.00','34'],
		['http://www.mogujie.com/','img/jacket5.jpg','当季必备开衫','118.00','34'],
		['http://www.mogujie.com/','img/jacket6.jpg','宽松破洞牛仔外套','118.00','34'],
		['http://www.mogujie.com/','img/jacket7.jpg','黑白简约棒球衫','118.00','34'],
		['http://www.mogujie.com/','img/jacket8.jpg','柔软圆领长袖T恤','118.00','34'],
		['http://www.mogujie.com/','img/jacket9.jpg','条纹英伦风毛衣','118.00','34'],
		['http://www.mogujie.com/','img/jacket10.jpg','大翻领外套毛衣','118.00','34']],
		[['http://www.mogujie.com/','img/skirt1.jpg','英伦风潮流裙','118.00','34'],/*第二块*/
		['http://www.mogujie.com/','img/skirt2.jpg','V领宽松针织背心裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt3.jpg','秋装显瘦半身裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt4.jpg','新款气质衬衫','118.00','34'],
		['http://www.mogujie.com/','img/skirt5.jpg','修身显瘦牛仔包臀裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt6.jpg','复古连衣裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt7.jpg','文艺范秋季甜美连衣裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt8.jpg','无袖百褶雪纺连衣裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt9.jpg','立领条纹连衣裙','118.00','34'],
		['http://www.mogujie.com/','img/skirt10.jpg','下摆开叉包臀裙','118.00','34']],
		[['http://www.mogujie.com/','img/acc1.jpg','GUOU奢华星空手表','118.00','34'],/*第三块*/
		['http://www.mogujie.com/','img/acc2.jpg','天然白莲花手链','118.00','34'],
		['http://www.mogujie.com/','img/acc3.jpg','满天繁星手链','118.00','34'],
		['http://www.mogujie.com/','img/acc4.jpg','秋冬毛线围巾披肩','118.00','34'],
		['http://www.mogujie.com/','img/acc5.jpg','唯美手链表','118.00','34'],
		['http://www.mogujie.com/','img/acc6.jpg','五彩棒球帽','118.00','34'],
		['http://www.mogujie.com/','img/acc7.jpg','蝴蝶精灵耳钉','118.00','34'],
		['http://www.mogujie.com/','img/acc8.jpg','气质双贝珠纯银耳环','118.00','34'],
		['http://www.mogujie.com/','img/acc9.jpg','韩版英伦格子围巾','118.00','34'],
		['http://www.mogujie.com/','img/acc10.jpg','纯银925铜钱戒指','118.00','34']],
		[['http://www.mogujie.com/','img/pants1.jpg','清爽型背带哈伦裤','118.00','34'],/*第四块*/
		['http://www.mogujie.com/','img/pants2.jpg','圆点九分休闲哈伦裤','118.00','34'],
		['http://www.mogujie.com/','img/pants3.jpg','韩国2扣毛边牛仔长裤','118.00','34'],
		['http://www.mogujie.com/','img/pants4.jpg','邵夫人松紧腰机车皮短裤','118.00','34'],
		['http://www.mogujie.com/','img/pants5.jpg','新款打底秋季必备','118.00','34'],
		['http://www.mogujie.com/','img/pants6.jpg','韩版破洞牛仔小脚裤','118.00','34'],
		['http://www.mogujie.com/','img/pants7.jpg','学院风宽松休闲背带裤','118.00','34'],
		['http://www.mogujie.com/','img/pants8.jpg','韩版抓纹高腰牛仔长裤','118.00','34'],
		['http://www.mogujie.com/','img/pants9.jpg','金色涂层显瘦打底裤','118.00','34'],
		['http://www.mogujie.com/','img/pants10.jpg','抽绳大口袋牛仔裤','118.00','34']],
		[['http://www.mogujie.com/','img/shoe1.jpg','欧洲站真皮厚底鞋','118.00','34'],/*第五块*/
		['http://www.mogujie.com/','img/shoe2.jpg','漆皮欧美真皮女凉靴','118.00','34'],
		['http://www.mogujie.com/','img/shoe3.jpg','春夏开口笑小白鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe4.jpg','百搭英伦小白鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe5.jpg','早秋推荐换季必备','118.00','34'],
		['http://www.mogujie.com/','img/shoe6.jpg','欧美风复古拼色休闲鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe7.jpg','欧美风系带坡跟女单鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe8.jpg','新款粗跟皮带扣单鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe9.jpg','韩版真皮笑脸单鞋','118.00','34'],
		['http://www.mogujie.com/','img/shoe10.jpg','魔术贴夏款平底凉鞋','118.00','34']],
		[['http://www.mogujie.com/','img/group1.jpg','泡泡袖树叶连衣裙','118.00','34'],/*第六块*/
		['http://www.mogujie.com/','img/group2.jpg','水溶蕾丝长款连衣裙','118.00','34'],
		['http://www.mogujie.com/','img/group3.jpg','百搭印花宽松长袖外套','118.00','34'],
		['http://www.mogujie.com/','img/group4.jpg','魔术贴厚底休闲运动鞋','118.00','34'],
		['http://www.mogujie.com/','img/group5.jpg','时尚复古短靴','118.00','34'],
		['http://www.mogujie.com/','img/group6.jpg','时尚宽松夹克短外套','118.00','34'],
		['http://www.mogujie.com/','img/group7.jpg','早秋通勤子母大包','118.00','34'],
		['http://www.mogujie.com/','img/group8.jpg','百搭石头纹双肩包','118.00','34'],
		['http://www.mogujie.com/','img/group9.jpg','款简约小清新四件套','118.00','34'],
		['http://www.mogujie.com/','img/group10.jpg','男士条纹纯棉船袜','118.00','34']],
		[['http://www.mogujie.com/','img/bag1.jpg','条纹帆布单肩包','118.00','34'],/*第七块*/
		['http://www.mogujie.com/','img/bag2.jpg','头层牛皮水桶单肩包','118.00','34'],
		['http://www.mogujie.com/','img/bag3.jpg','兔耳朵牛仔单肩大包','118.00','34'],
		['http://www.mogujie.com/','img/bag4.jpg','潮人铆钉手拿包','118.00','34'],
		['http://www.mogujie.com/','img/bag5.jpg','夏日欢乐时光','118.00','34'],
		['http://www.mogujie.com/','img/bag6.jpg','韩版学生女双肩包','118.00','34'],
		['http://www.mogujie.com/','img/bag7.jpg','欧美复古机车水桶包','118.00','34'],
		['http://www.mogujie.com/','img/bag8.jpg','简约休闲日韩大包','118.00','34'],
		['http://www.mogujie.com/','img/bag9.jpg','高档黑色铆钉手包','118.00','34'],
		['http://www.mogujie.com/','img/bag10.jpg','流苏糖果色斜挎包','118.00','34']]
	]
	$('.int').each(function(index,elem){//添加推荐的主内容
		var a = ''
		for (var i=0; i<inte[index].length; i++) {
			a += '<li><a href="'+inte[index][i][0]+'"><img data-src="'+inte[index][i][1]+'"></a><a href="'+inte[index][i][0]+'">'+inte[index][i][2]+'</a><br><span>&yen;'+inte[index][i][3]+'</span><em>'+inte[index][i][4]+'</em></li>'
		}
		$(elem).html(a)
	})
})

