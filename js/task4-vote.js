var kills = JSON.parse(localStorage.getItem('kills'));
var day = JSON.parse(localStorage.getItem('day'));
window.onload = function auto() {
    for (i = 0; i < kills.length; i++) {
            var txt1 = $("<div></div>").text(kills[i].identity).addClass("name");
            var txt2 = $("<div></div>").text(i + 1).addClass("num");
            var txt3 = $("<li></li>").addClass("card1");
         if(kills[i].state === "dead"){
            $(txt3).addClass("red");
         }
            $(".content").append(txt3);
            $(txt3).append(txt1, txt2);
    }
}

function jump() {
           var alivegoodmen = kills.filter(function (item,index,array) {
               return (kills.state === "alive" && kills.identity === "平民")
           });
           var evilmen =  kills.filter(function (item,index,array) {
               return (kills.state === "alive" && kills.identity === "杀手")
           });
           if(alivegoodmen.length+1 - evilmen.length <2 ){
//               跳到结果页杀手胜利
              var killermen =kills.filter(function (item,index,array) {
                   return (kills.identity === "杀手");
               });
              var goodfamer =kills.filter(function (item,index,array) {
                  return (kills.identity === "平民");
              });
               var outcome=[];
               outcome[0]="杀手胜利";
               outcome[1]="80%的杀手";
               outcome[2]=killermen.length;
               outcome[3]=goodfamer.length;
               window.location.href="https://bradmatt213.github.io/learngit/task4-outcom";
               localStorage.setItem('outcome',JSON.stringify(outcome))
               }
               else if(alivegoodmen.length+1 -evilmen.length >2 && evilmen.length === 0){
           //    跳到到结果页好人胜利
               var outcome=[];
               outcome[0]="平民胜利";
               outcome[1]="20%的平民";
               outcome[2]=killermen.length;
               outcome[3]=goodfamer.length;
               window.location.href="https://bradmatt213.github.io/learngit/task4-outcome";
               localStorage.setItem('outcome',JSON.stringify(outcome))
           }
           else {
           //    跳到任务开始页面继续游戏
               window.location.href="https://bradmatt213.github.io/learngit/task4-2";
           }
}

var dead = [];
$(document).ready(function () {

    $(".card1").click(function () {
        var index = $(this).index();
        if(kills[index].state === "dead"){
            alert("请投活人");
        }else {
            dead.push(kills[index]);
            $(this).addClass("red");
            kills[index].state = "dead";
            kills[index].kmode = "votedead";
            kills[index].ktime = day;
            localStorage.setItem('dead', JSON.stringify(dead));
            localStorage.setItem('index', JSON.stringify(index));
            localStorage.setItem('kills', JSON.stringify(kills));
            day++;
            localStorage.setItem('day', JSON.stringify(day));}
    })
})