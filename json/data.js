function getRandom(n,m) {
    return Math.round(Math.random()*(m-n)+n);
}
var str1 = "赵钱孙李周吴郑王冯陈诸卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎";
var str2 = "一二三四五六七八九十";
var arr = [];
for (var i = 0; i <= 99; i++) {
    var obj = {};
    obj["id"] = i;
    obj["name"] = str1[getRandom(0,47)] +  str2[getRandom(0,9)];
    obj["sex"] = getRandom(0,1);
    obj["score"] = getRandom(50,99);
    arr.push(obj);
}
console.log(JSON.stringify(arr));