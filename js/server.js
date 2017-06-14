var http = require("http"),
    url = require("url"),
    fs = require("fs");
var server1 = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
});
server1.listen(88,function () {
    console.log("success")
})
