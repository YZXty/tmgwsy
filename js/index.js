//顶部搜索 start

var dbssbox=$(".dbssbox")[0];
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var flagdown=1;
var flagup=1;
addEvent(window,"scroll",function(){
	if (obj.scrollTop>522) {
		if (flagdown==1) {
			animate(dbssbox,{top:0},500);
			flagdown=2;
			flagup=1;
		};
	}else{
		if(flagup==1){
		animate(dbssbox,{top:-50},200);
		flagup=2;
	    }
		flagdown=1;
	}
})
//顶部搜索 end


// 楼层跳转 start

var lctz=$(".lctz")[0];
var lc=$(".lc");
var floor=$(".floor");
var arr=["orange","indigo","blue","yellow","#067d69","pink","purple","black"];
addEvent(window,"scroll",function () {
	if(obj.scrollTop>580){
		animate(lctz,{width:36,height: 369},500);
		for(var i=1;i<floor.length-1;i++){
			if(lc[i-1].offsetTop<=obj.scrollTop+300){
				for (var j = 1; j < floor.length-1;j++) {
					floor[j].style.background="#534d4d";
				}
				floor[i].style.background=arr[i-1]
			}else{
				floor[i].style.background="#534d4d";
			}

		}
	}else{
		animate(lctz,{width:0,height:0},200);
	}
})
var flag=0;
for(var i=1;i<floor.length-1;i++){
	floor[i].index=i;
	floor[i].onclick=function(){
		obj.scrollTop=lc[this.index-1].offsetTop-50;
		floor[this.index].style.background=arr[this.index-1];
		flag=this.index;
	}
	floor[i].onmouseover=function () {
		for(j=1;j<floor.length-1;j++){
			if(j!=flag){
				floor[j].style.background="#534d4d";
			}
			floor[this.index].style.background=arr[this.index-1];
		}
		now=this.index;
	}
}
lctz.onmouseout=function () {
	if(flag!=now){
	floor[now].style.background="#534d4d";
	}
}
// 楼层跳转 end


// 品牌街
var tu=getClassName("tu");
var zz=getClassName("zz");
for (var i = 0; i < tu.length; i++) {
	tu[i].index=i;
	tu[i].onmouseover=function  () {
		// body...
	zz[this.index].style.display="block"
	}
	tu[i].onmouseout=function  () {
		// body...
	zz[this.index].style.display="none"
	}
};
// 品牌街


//banner start

var bannerd=getClassName("bannerd");
var btn=getClassName("btn");
var banner2=getClassName("banner2")[0];
var bgc=$(".bgc");
//自动轮播
var num=0;
function change1 () {
	num++;
	if (num>5) {
		num=0
	}
	for (var i = 0; i < bannerd.length; i++) {
		bannerd[i].style.zIndex="1";
		bgc[i].style.zIndex="0";
		btn[i].style.backgroundImage="url(images/index.png)"
	}
	bannerd[num].style.zIndex="6";
	bgc[num].style.zIndex="1";
	btn[num].style.backgroundImage="url(images/index2.png)"
	// body...
}
var t1=setInterval(change1,2000)


banner2.onmouseover=function(){
    clearInterval(t1)
}

banner2.onmouseout=function(){
     t1=setInterval(change1,2000)
}


for (var i = 0; i < btn.length; i++) {
	btn[i].aa=i;
	btn[i].onmouseover=function  () {
		clearInterval(t1);
		for (var j = 0; j < btn.length; j++) {
			bannerd[j].style.zIndex="1";
			bgc[j].style.zIndex="0";
			btn[j].style.backgroundImage="url(images/index.png)";
		};
		bannerd[this.aa].style.zIndex="6";
		bgc[this.aa].style.zIndex="1";
		btn[this.aa].style.backgroundImage="url(images/index2.png)";
        num=this.aa;
	}
};
//banner end


// 网站导航 start


// 网站导航 end

// 亲子时光 图片左右动start

var tulr=$(".tulr");
var lrimg=$(".lrimg");
for(var i=0;i<tulr.length;i++){
	tulr[i].aa=i;
	hover(tulr[i],function () {
		animate(lrimg[this.aa],{left:82},400)},function () {
		animate(lrimg[this.aa],{left:90},400)
	})
}
var tulr2=$(".tulr2");
var lrimg2=$(".lrimg2");
for(var i=0;i<tulr2.length;i++){
	tulr2[i].aa=i;
	hover(tulr2[i],function () {
		animate(lrimg2[this.aa],{left:140},400)},function () {
		animate(lrimg2[this.aa],{left:148},400)
	})
}
// 亲子时光 图片左右动end

// 猜你喜欢 start

var hbk=$(".hbk");
for(i=0;i<hbk.length;i++){
	hbk[i].bb=i
	hover(hbk[i],function(){
		hbk[this.bb].style.border="1px solid red";
	},function(){
		hbk[this.bb].style.border="1px solid #fff";
	})
}
// 猜你喜欢 end

// 品牌旗舰店 start

var qjdul=$(".qjdul");
for (var i=0;i<qjdul.length;i++){
	qjdul[i].index=i;
	qjdul[i].onmouseover=function () {
		qjdul[this.index].style.border = "1px solid red";
	}
	qjdul[i].onmouseout=function () {
		qjdul[this.index].style.border="1px solid #fff";
	}
}
// 品牌旗舰店 end
