 // banner切换公用方法 传入四个参数：parentEl（轮播图片承载的元素），tagEl(对应切换图片的标签按钮)，speed（图片切换动画的速度），time(轮播间隔时间)
 const bannerAction = function (parentEl,tagEl,speed,time) {
    var i = 1;
    var timer;
    //设置第一张图片显示，其余隐藏
    $(parentEl).eq(0).show().siblings().hide();

    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的tag时，触发hover事件
    $(tagEl).hover(function () {
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        //鼠标离开，恢复定时器轮播
        showTime();
    });

    //创建一个showTime函数
    function showTime() {
        //定时器
        timer = setInterval(function () {
            //调用一个Show()函数
            Show();
            i++;
            let length = $(parentEl).length;
            //当图片是最后一张的后面时，设置图片为第一张
            if (i == length) {
                i = 0;
            }
        }, time);
    }
    //创建一个Show函数
    function Show() {
        $(parentEl).eq(i).fadeIn(speed).siblings().fadeOut(speed);
        $(tagEl).eq(i).addClass('active').siblings().removeClass('active');
    }
}

// 公共的tabs标签效果，传入三个参数：title（tabs的标题元素），item(tabs的内容元素)，speed(标签切换动画的速度)
const tabs = function (title, item, speed) {
    var _tab = $(title);
    var _con = $(item );
    var _index = 0;
    _tab.eq(_index).addClass("active");
    _con.eq(_index).css("display", "block");
    _tab.mouseover(function () {
        _index = _tab.index(this);
        $(this).addClass('active').siblings().removeClass('active');
        _con.filter(':visible').stop(true, true).fadeOut(speed, function () {
            _con.eq(_index).fadeIn(speed)
        })
    });
}
