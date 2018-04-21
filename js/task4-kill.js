var kills=JSON.parse(localStorage.getItem('kills'));
console.log(kills);
window.onload=function auto() {
    for(i=0;i<kills.length;i++) {
            var txt1 = $("<div></div>").text(kills[i].identity).addClass("name");
            var txt2 = $("<div></div>").text(i + 1).addClass("num");
            var txt3 = $("<li></li>").addClass("card1");
            if(kills.state === "dead"){
                $(txt3).addClass("red");
            }
            $(".content").append(txt3);
            $(txt3).append(txt1, txt2);
    }
}
function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-2";
}
var dead=[];
var day= 1;
$(document).ready(function () {
    $(".card1").click(function () {
        var index = $(this).index();
        if(kills[index].state === "dead"){
            alert("请杀活人");}
        else if(kills[index].identity === "杀手"){
            alert("自己人兄dei")
        }else{
        dead.push(kills[index]);
        $(this).addClass("red");
        kills[index].state="dead";
        kills[index].kmode="killdead";
        kills[index].ktime=day;
        localStorage.setItem('dead', JSON.stringify(dead));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('kills', JSON.stringify(kills));
            localStorage.setItem('day', JSON.stringify(day));
        }
    })
})