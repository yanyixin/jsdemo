/**
 * Created by 晓倩 on 2017/5/17.
 */
$(function(){
    var slider = $("#slider");
    var dots = $("#dots span"),
        prev = $("#prev"),
        next = $("#next");
    var sliderInder = slider.children('ul')
    var sliderLi = sliderInder.children('li');
    var sliderSize = sliderLi.length; //滑块的总个数
    var index = 1; //初始显示第一个滑块
    var speed = 400; //滑动速度
    var interval = 3000; //间隔时间
    var autoPlay = false; //是否支持自动滑动
    var clickable = true; //是否已经点击了滑块在做滑动动画

    var moveTo = function (index,dir) {
        if(clickable){
            clickable = false;
            //位移距离
            var offset = slider.width();
            if(dir == 'prev'){
                offset = -1*offset
            }
            //当前滑动动画
            sliderInder.children('.activ').stop().animate({
                left:-offset
            },speed,function () {
                $(this).removeClass('active')
            })
            //下一个滑块动画
            sliderLi.eq(index-1).css('left',offset + 'px').addClass('active').stop().animate({
              left:0
            },speed,function () {
                clickable = true;
            });
            dots.removeClass('active');
            dots.eq(index-1).addClass('active')
        }
    }
});
