var kills = JSON.parse(localStorage.getItem('kills'));
var killer = kills.filter(function (item, index, array) {
    return (item === "杀手");
});
var famer = kills.filter(function (item, index, array) {
    return (item === "平民");
});
function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task4-kill";
}
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
            {name: 'reset', from: 'vote', to: "none"}
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
                alert("投票");
            },
        }
    });
    $("#step1").click(function () {
        process.onTimetokill();
        jump();
    })
    $("#step2").click(function () {
        process.onDeadmenspeak();
    })
    $("#step3").click(function () {
        process.onPlayerspeak();
    })
    $("#step4").click(function () {
        process.onTimetovote();
    })
});

