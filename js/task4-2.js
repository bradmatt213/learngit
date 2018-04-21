var kills = JSON.parse(localStorage.getItem('kills'));
alert(kills);
var killer = kills.filter(function (item, index, array) {
    return (item === "杀手");
});
var famer = kills.filter(function (item, index, array) {
    return (item === "平民");
});
var killsObj
{
    for (i = 0; i < kills.length; i++) {
        function kills(role, isAlive) {
            this.role = kills[i];
            this.isAlive = "yep";
            this.sayRole = function () {
                alert(this.role);
            }
        }
    }
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
    $("button").click(function () {
        process.onTimetokill();
        jump();
    })
    $("button").click(function () {
        process.onDeadmenspeak();
    })
    $("button").click(function () {
        process.onPlayerspeak();
    })
    $("button").click(function () {
        process.onTimetokill();
    })
});

