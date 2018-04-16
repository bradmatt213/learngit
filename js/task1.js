var auto;

function start() {
    auto = setInterval(select, 1000);
}

//每一秒钟运行一次select();
function stop() {
    clearInterval(auto);
}

var box = document.getElementsByClassName('box');

function select() {
    color();
    var num = [];
//创建一个空数组
    var temp = [];
    for (var a = 0; a < 3; a++) {
        do {
            num[a] = Math.floor(Math.random()*10-1);
        }
        while (temp.indexOf(num[a]) >= 0);
        temp.push(num[a]);
        //   将得到的随机数字push到一个空的数组中
    }
    box[num[0]].style.background = getcolor();
    box[num[1]].style.background = getcolor();
    box[num[2]].style.background = getcolor();
}

function getcolor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.round(Math.random() * 256);
    var b = Math.round(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function color() {
    for (var i = 0; i < 9; i++) {
        box[i].style.background = "orange";
    }
}


