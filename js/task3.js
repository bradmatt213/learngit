function jump() {
    window.location.href="https://bradmatt213.github.io/learngit/task2-js";
}
var i=0;
var k=0;
function fapai() {
    kills=JSON.parse(localStorage.getItem('kills'));
        i++;
    if( i%2 !== 0 && k<kills.length) {
        $("#num").attr("value",k+1);
        $("#icon").attr("src","img/headicon.png");
        $(".matt").append(kills[k]);
        $("#fanpai").attr("value","隐藏身份并传递给"+(k+2)+"号");
        k++;
    }
    else if ( i%2 === 0 && k<kills.length){
        $("#num").attr("value",k+1);
        $("#icon").attr("src","img/myking.png");
        $("#fanpai").attr("value","查看"+(k+1)+"号玩家身份");
        $(".matt").empty();
    }
    else{
        $("#fanpai").attr("value","法官查看");

    }

}