function jump(){
    window.location.href="https://bradmatt213.github.io/learngit/task3-js"
}
var kills=JSON.parse(localStorage.getItem('kills'));
window.onload=function auto() {
    for(i=0;i<kills.length;i++) {
        var txt1 = $("<div></div>").text(kills[i]).addClass("name");
        var txt2=$("<div></div>").text(i+1).addClass("num");
        var txt3=$("<li></li>").addClass("card1");
        $(".content").append(txt3);
        $(txt3).append(txt1,txt2);
    }
}