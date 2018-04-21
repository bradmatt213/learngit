var kills = JSON.parse(localStorage.getItem('kills'));

var killer = kills.filter(function (item, index, array) {
    return (item === "杀手");
});
var famer = kills.filter(function (item, index, array) {
    return (item === "平民");
});
function Kills(role,isAlive) {
    this.role=role;
    this.isAlive=isAlive;
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
            {name: 'reset', from: 'vote', to: "day"}
        ],
        methods: {
            onTimetokill: function () {
                $("button").addClass("after");
                alert("天黑请闭眼");
            },
            onDeadmenspeak: function () {
                $("button").addClass("after");
                alert("亡灵发表遗言");
            },
            onPlayerspeak: function () {
                $("button").addClass("after");
                alert("玩家依次发表遗言");
            },
            onTimetovote: function () {
                $("button").addClass("after");
                alert("投票");
            },
        }
    });
    $("button1").click(function () {
        process.onTimetokill();
        jump();
    })
    $("button1").click(function () {
        process.onDeadmenspeak();
    })
    $("button1").click(function () {
        process.onPlayerspeak();
    })
    $("button1").click(function () {
        process.onTimetokill();
    })
});

