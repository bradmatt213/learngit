var kills=JSON.parse(localStorage.getItem('kills'));
console.log(kills);
window.onload=function auto() {
    for(i=0;i<kills.length;i++) {
        var txt1 = $("<div></div>").text(kills[i]).addClass("name");
        var txt2=$("<div></div>").text(i+1).addClass("num").attr("id",i);
        var txt3=$("<li></li>").addClass("card1");
        $(".content").append(txt3);
        $(txt3).append(txt1,txt2);
    }
}
var dead=[];
$(document).ready(function () {

    $(".card1").click(function () {
        var index = $(this).index();
        dead.push(kills[index]);
        kills
        localStorage.clear();
        localStorage.setItem('dead', JSON.stringify(dead));
        localStorage.setItem('index', JSON.stringify(index));

    })
})