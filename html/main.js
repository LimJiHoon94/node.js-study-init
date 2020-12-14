var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname+ url);
    response.end(fs.readFileSync(__dirname + url));
    //response.end에 사용자에게 전송할 데이터를 입력한다.
    //vs code의 터미널을 이용해 실행 (node masin.js > 브라우저 > localhost:3000)

});
app.listen(3000);