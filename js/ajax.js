function creatXHR() {
    //创建XHR对象，兼容所有浏览器.理解惰性思想
    var xhr = null;
    var flag = true;
    var ary = [
        function () {
            return new XMLHttpRequest();
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxm12.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxm13.XMLHTTP");
        }
    ];
    for (var i = 0; i < ary.length; i++) {
        var curFn = ary[i];
        try {
            //能正确执行
            xhr = curFn();
            creatXHR = curFn; //一次测试成功后，方法进行重写，下一次直接执行正确函数，理解惰性思想
            break;
        } catch (e) {
            //发生错误
        }
    }
    if (!flag) {
        throw new Error("您的浏览器不支持Ajax");
    }
    return xhr;
}