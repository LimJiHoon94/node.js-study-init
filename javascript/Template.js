var name = 'text';
var text =  name  +  "aaaaaaaaaaaaaaaaaaaaaaa \n\
\n\
" + name + " aaaaaaaaaaaaaaaa text aaaaaaaaaaa"; 
//console.log(text); //\n\ = 줄바꿈


 var a = 1; // a = '1';
 //리터널은 정보를 표현하는 법
 
 var text =  ` ${name} aaaaaaaaaaaaaaaaaaaaaaa
 
 ${name}  aaaaaaaaaaaaaaaa text aaaaaaaaaaa ${1+1}`; 
 // `을 사용하여 변수와 개행문자를 쉽게 표현한다.
console.log(text);


