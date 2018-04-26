var xhr = new XMLHttpRequest();
function ip() {
    var name = $("#fname").val();
    var code = $("#fcode").val();
// 指定通信过程中状态改变时的回调函数
    xhr.open("post", "/carrots-admin-ajax/a/login",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&pwd=" + code);
    xhr.timeout = 3000;
    xhr.ontimeout = function () {
        alert("请求超时");
    };
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                if (JSON.parse(xhr.responseText).code >= 0) {
                    window.location.href = "http://dev.admin.carrots.ptteng.com/";
                } else {
                    alert("aaaa");
                }
            }
        }
    };
}
