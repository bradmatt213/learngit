var kills = JSON.parse(localStorage.getItem('kills'));
var dead = JSON.parse(localStorage.getItem('dead'));
var outcome = JSON.parse(localStorage.getItem('outcome1'));
var outcome2 = JSON.parse(localStorage.getItem('outcome2'));

function auto() {
    var killers = kills.filter(function (item) {
        return (item.identity === "杀手");
    })
    var famers = kills.filter(function (item) {
        return (item.identity === "平民");
    })
    var killed = kills.filter(function (item) {
        return (item.kmode === "killdead");
    })
    var votedead = kills.filter(function (item) {
        return (item.kmode === "votedead");
    })

    $(document).ready(function () {
        $(".dt2").append(outcome);
        $(".percent").append(outcome2);
        $(".killer").append("杀手" + killers.length + "人");
        $(".famer").append("平民" + famers.length + "人");
        $(".sniper").append("狙击手1人");
       for(i=0;i<killed.length;i++){
        switch (killed[i].ktime){
            case 1:
                $(".day1").find(".night").append("第一天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 2:
                $(".day2").find(".night").append("第二天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 3:
                $(".day3").find(".night").append("第三天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 4:
                $(".day4").find(".night").append("第四天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 5:
                $(".day5").find(".night").append("第五天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 6:
                $(".day6").find(".night").append("第六天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 7:
                $(".day7").find(".night").append("第七天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 8:
                $(".day8").find(".night").append("第八天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            case 9:
                $(".day9").find(".night").append("第九天晚上被杀死的是"+killed[i].number+"号玩家，他的身份是"+killed[i].identity);
                break;
            default:
                alert("aaaaa");
        }}
        for(i=0;i<votedead.length;i++){
            switch (votedead[i].ktime){
                case 1:
                    $(".day1").find(".vote").append("第一天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 2:
                    $(".day2").find(".vote").append("第二天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 3:
                    $(".day3").find(".vote").append("第三天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 4:
                    $(".day4").find(".vote").append("第四天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 5:
                    $(".day5").find(".vote").append("第五天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 6:
                    $(".day6").find(".vote").append("第六天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 7:
                    $(".day7").find(".vote").append("第七天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 8:
                    $(".day8").find(".vote").append("第八天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                case 9:
                    $(".day9").find(".vote").append("第九天白天被投死的是"+votedead[i].number+"号玩家，他的身份是"+votedead[i].identity);
                    break;
                default:
                    alert("aaaaa");
            }}
    })
}

auto();
function anothergame() {
    window.location.href = "task2-js.html";
}