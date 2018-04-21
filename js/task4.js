var kills=JSON.parse(localStorage.getItem('kills'));
console.log(kills)
window.onload=function auto() {
    for(i=0;i<kills.length;i++) {
        var txt1 = $("<div></div>").text(kills[i]).addClass("name");
        var txt2=$("<div></div>").text(i+1).addClass("num").attr("id",i);
        var txt3=$("<li></li>").addClass("card1");
        $(".content").append(txt3);
        $(txt3).append(txt1,txt2);
    }
}
function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-2";
}