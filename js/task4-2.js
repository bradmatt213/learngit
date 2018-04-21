var kills = JSON.parse(localStorage.getItem('kills'));
var day = (JSON.parse(localStorage.getItem('day'))>1)?JSON.parse(localStorage.getItem('day')):1;
//定义天数
window.onload = function daytime(){
    $(".daytime").text(day);
}
function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-kill";
}
//跳转到杀人页面
function jumptovote() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-vote";
}
//跳转到投票界面
function setGamer(number,identity,state,kmode,ktime) {
    kills[i]={
        number:number,
        identity:identity,
        state:state,
        kmode:kmode,
        ktime:ktime
    };
    return kills[i];
}
function aliveordead() {
    var temp=[];
    for(i=0;i<kills.length;i++){

        temp.push(kills[i]);
        setGamer();
         kills[i].state="alive";
         kills[i].identity=temp[i];
         kills[i].number=i+1;
         kills[i].kmode="notyet";
         kills[i].ktime="notyet";
    }
    localStorage.setItem('kills', JSON.stringify(kills));
}
$(document).ready(function () {
    var process = new StateMachine({
        //   初始化
        init: 'day',
        transitions: [
            {name: 'timetokill', from: 'day', to: 'kill'},
            {name: 'deadmenspeak', from: 'kill', to: 'speak'},
            {name: 'playerspeak', from: 'speak', to: 'player'},
            {name: 'timetovote', from: 'player', to: 'vote'},
            {name: 'reset', from: 'vote', to: "day"}
        ],
        methods: {
            onTimetokill: function () {
                $("#step1").addClass("after");
                alert("天黑请闭眼");
            },
            onDeadmenspeak: function () {
                $("#step2").addClass("after");
                alert("亡灵发表遗言");
            },
            onPlayerspeak: function () {
                $("#step3").addClass("after");
                alert("玩家依次发表遗言");
            },
            onTimetovote: function () {
                $("#step4").addClass("after");
                alert("请投票");
            }
        }
    });
    $("#step1").click(function () {
        process.onTimetokill();
        jump();
        $(".title").text("杀手杀人");
    })
    $("#step2").click(function () {
        process.onDeadmenspeak();
    })
    $("#step3").click(function () {
        process.onPlayerspeak();
    })
    $("#step4").click(function () {
        process.onTimetovote();
        jumptovote();
        $(".title").text("请投票");
    })
});

