function jump(){
    window.location.href="https://bradmatt213.github.io/learngit/task3-js"
}
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
var deadmen=[];
var alivemen=kills;
var votedeadmen=[];

//1活的 2死的
var killsObj=[
    {
         "1":{
            role:"杀手"
        }
    }
];

$(document).ready(function () {
    // $("#i").click(function () {
    //    if(alivemen[i]==="杀手"){
    //        alert("杀平民");
    //     }
    //    else{
    //     alivemen.pop(i);
    //     deadmen.push(i);
    //        localStorage.clear();
    //        localStorage.setItem('alivemen', JSON.stringify(alivemen));
    //        localStorage.setItem('deadmen', JSON.stringify(deadmen));
    //    }
    // })
    $(".card1").click(function () {
        var index=$(this).index();
        alivemen.pop()
    })
})
$(document).ready(function () {
    $("#i").click(function () {
        if(alivemen[i]==="杀手"){
            alert("杀平民");
        }
        else{
        alivemen.pop(i);
        votedeadmen.push(i);
            localStorage.setItem('alivemen', JSON.stringify(alivemen));
            localStorage.setItem('deadmen', JSON.stringify(deadmen));
        }
    })
})


var fsm={
   state:"day",
    firstday:function () {
        switch (fsm.state){
            case'day':
                jumpkill();
                fsm.state="kill";
                break;
            case'kill':
                alert("死者请发表遗言");
                fsm.state="dead";
                break;
            case'dead':
                alert("玩家");
                fsm.state="vote";
                break;

        }
    }



}