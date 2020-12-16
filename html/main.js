var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; 
    var pathname = url.parse(_url , true).pathname; 
   
    //console.log(_url);
    //console.log(queryData.id);
    if(pathname === '/'){
      if(queryData.id === undefined){
        
        fs.readFile(`data/${queryData.id}`,'utf8', function(err,description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ul>
                <li><a href="/?id=html">HTML</a></li>
                <li><a href="/?id=css">CSS</a></li>
                <li><a href="/?id=javascript">JavaScript</a></li>
              </ul>
              <h2>${title}</h2>
              <p>${description}
              </p>
            </body>
            </html>
      `;
      response.writeHead(200);
      response.end(template);
        });
      }else{
    fs.readFile(`data/${queryData.id}`,'utf8', function(err,description){
        var title = queryData.id;
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=html">HTML</a></li>
              <li><a href="/?id=css">CSS</a></li>
              <li><a href="/?id=javascript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${description}
            </p>
          </body>
          </html>
    `;
    response.writeHead(200);
    response.end(template);
    });
  }
  }else {
    response.writeHead(404);
    response.end('Not found');
  }
    
   
    //response.end에 사용자에게 전송할 데이터를 입력한다.
    //vs code의 터미널을 이용해 실행 (node masin.js > 브라우저 > localhost:3000)

});
app.listen(3000);