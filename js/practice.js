//跑动的次数
var count = 0;
//动画的执行方向
var isgo = false;
//定义计时器对象
var timer;

window.onload = function () {
    /*获取ul元素*/
    var ul_img = document.getElementsByClassName("ul_img")[0];
    //获取所有的li图片元素
    var li_img = document.getElementsByClassName("li_img");
    //获取控制方向的箭头元素
    var arrow = document.getElementsByClassName("arrow");
    //获取所有按钮元素
    var div_btn = document.getElementsByClassName("div_btn");
    function showtime() {
        timer=setInterval(function (){
            if(isgo===fales){
                count++;
                ul_img.style.transform = "translate(" + -800 * count + "px)";
            }
        },4000);
    }















}


    /*定义计时器，控制图片移动*/
