function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task2-js";
}
function  task3() {
   if(kills.length === 0){
       alert("请先设置人数");
   }
   else{
       window.location.href="https://bradmatt213.github.io/learngit/task3-js";
   }
}
function jumpback() {
    window.location.href="https://bradmatt213.github.io/learngit/task7";
}
var police;
var famer;
var sniper;
var kills = [];
function appendText(){
    put();
    var txt=[];
    for (k = 0; k < kills.length; k++){
        if (kills[k] === "杀手"){
            txt[k] =$("<li></li>").text([k+1]+"号玩家"+kills[k]).addClass("orange");
            }
        else if(kills[k] === "平民"){
            txt[k] =$("<li></li>").text([k+1]+"号玩家"+kills[k]).addClass("blue");
            }
            else {
            txt[k] =$("<li></li>").text([k+1]+"号玩家"+kills[k]).addClass("purple");
        }
            $("ul").append(txt[k]);

    }
}
function change(){
    var num=document.getElementById("range");
    var location=document.getElementById("test");
    location.value=num.value;
}
function down() {

    var up=document.getElementById("range");
    var up1=document.getElementById("test");
   if(up1.value>5){

       up.value--;
       up1.value--;
   }
   else{
       alert("人数太少啦,打扑克去吧");
   }


}
function up() {
    var down = document.getElementById("range");
    var down1 = document.getElementById("test");
    if (down1.value <= 15) {

        down.value++;
        down1.value++;
    }
    else{
        alert("人太多啦，兄dei~")
    }
}
function put() {

    var num=document.getElementById("test");
    var location=document.getElementById("range");
    location.value=num.value;
    switch (num.value) {
        case "4":
        case "5":
            police = 2;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "6":
        case "7":
            police = 3;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "8":
        case "9":
            police = 4;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "10":
        case "11":
            police = 5;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "12":
        case "13":
            police = 6;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "14":
        case "15":
            police = 7;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        case "16":
        case "17":
        case "18":
            police = 8;
            sniper=1;
            famer = num.value - police - sniper;
            break;
        default:
            alert("人数太少啦");
    }
    var i = 0;
    for (i = 0; i < police; i++) {
        kills.push("杀手");
    }
    for (i = 0; i < famer; i++) {
        kills.push("平民");
    }
    for (i = 0; i<sniper;i++){
        kills.push("狙击手");}
    kills.sort(function(){
        return 0.5-Math.random()});
}


function fapai() {
    alert(kills);
    var i=document.getElementById("num").value;
    i++;
    if( i%2 !== 0) {
        $("#num").attr("value",i);
        $("#icon").attr("src","img/headicon.png");
        $("#fanpai").attr("value","隐藏身份并传递给"+i+"号");
    }
    else{
        $("#num").attr("value",i);
        $("#icon").attr("src","img/myking.png");
        $("#fanpai").attr("value","查看"+i+"号玩家身份");
    }

}
