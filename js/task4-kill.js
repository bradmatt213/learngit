var kills=JSON.parse(localStorage.getItem('kills'));
console.log(kills);
window.onload=function auto() {
    for(i=0;i<kills.length;i++) {
        var txt1 = $("<div></div>").text(kills[i].identity).addClass("name");
        var txt2=$("<div></div>").text(i+1).addClass("num");
        var txt3=$("<li></li>").addClass("card1");
        $(".content").append(txt3);
        $(txt3).append(txt1,txt2);
    }
}
function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-2";
}
var dead=[];
$(document).ready(function () {
    $(".card1").click(function () {
        $(this).addClass("red");
        var i=1;
        var index = $(this).index();
        dead.push(kills[index]);
        kills[index].state="dead";
        kills[index].kmode="killdead";
        kills[index].ktime=i;
        localStorage.setItem('dead', JSON.stringify(dead));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('kills', JSON.stringify(kills));
        index++;
        i++;
    })
})