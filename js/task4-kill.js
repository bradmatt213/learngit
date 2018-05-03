var kills=JSON.parse(localStorage.getItem('kills'));
var dead = JSON.parse(localStorage.getItem(('dead')));
$(function () {
    var strHtml='';
    function test() {
        $.each(kills,function (i,v) {
            strHtml+='<li class="card1">'+
                '<div class="name">'+v.identity+'</div>'+
                '<div class="num">1</div>'+
                '</li>'
        });
        $(".content").html(strHtml);
    };
    test();
});

function jump() {
    window.location.href="task4-2.html";
}
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


        // localStorage.setItem('kills', JSON.stringify(kills));


        localStorage.setItem('day', JSON.stringify(day));
        }
    })
});