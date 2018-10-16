//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
"#f9f9f9"
element
<div style=​"background-color:​ rgb(249, 249, 249)​;​">​Hello, DOM!​</div>​
element.style.color='blue';
"blue"
element.style.fontSize=24;
24
document.body.appendChild(element);
<div style=​"background-color:​ rgb(249, 249, 249)​;​ color:​ blue;​">​Hello, DOM!​</div>​
element.style.textAlign = 'center';
"center"
element.style.fontSize=48;
48
element.style.fontSize=48px;
VM182:1 Uncaught SyntaxError: Invalid or unexpected token
element.style.fontSize=48;
48
element.style.fontFamily='arial';
"arial"
var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);
<ul>​…​</ul>​
ul.style.textAlign = 'left';
"left"
li.style.display = 'inline-block';
VM306:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:1
(anonymous) @ VM306:1
li.style.display = 'inline';
VM345:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:1
(anonymous) @ VM345:1
ul.removeChild(ul.querySelector('li:nth-child(2)'));
<li>​2​</li>​
ul
<ul style=​"text-align:​ left;​">​<li>​1​</li>​<li>​3​</li>​</ul>​
document.createElement('li');
<li>​</li>​
li.innerHTML = 4
VM418:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:1
(anonymous) @ VM418:1
li.innerHTML = 4;
VM422:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:1
(anonymous) @ VM422:1
li.querySelector(li).innerHTML= 4;
VM486:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:1
(anonymous) @ VM486:1
document.querySelector(li).innerHTML= 4;
VM500:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:24
(anonymous) @ VM500:1
ul.appendChild(li);
VM507:1 Uncaught ReferenceError: li is not defined
    at <anonymous>:1:16
(anonymous) @ VM507:1
ul
<ul style=​"text-align:​ left;​">​<li>​1​</li>​<li>​3​</li>​</ul>​
let x = document.createElement('li');
undefined
x.innerHTML='2';
"2"
ul.appendChild(x);
<li>​2​</li>​
ul
<ul style=​"text-align:​ left;​">​<li>​1​</li>​<li>​3​</li>​<li>​2​</li>​</ul>​
document.createElement('p');
<p>​</p>​
p.innerHtml='hello'
VM737:1 Uncaught ReferenceError: p is not defined
    at <anonymous>:1:1
(anonymous) @ VM737:1
let elem2 = document.createElement('p');
undefined
elem2.innerHTML="hello world"
"hello world"
document.body.appendChild(elem2);
<p>​hello world​</p>​
HTMLBodyElement
ƒ HTMLBodyElement() { [native code] }
body
VM878:1 Uncaught ReferenceError: body is not defined
    at <anonymous>:1:1
(anonymous) @ VM878:1
elem2.style.textAlign='centr'
"centr"
elem2.style.textAlign='center'
"center"
elem2.style.fontSize='30'
"30"
elem2.style.fontSize=30;
30
elem2.style.fontSize=30;
30
document.body.removeChild(.querySelector('p'))
VM977:1 Uncaught SyntaxError: Unexpected token .
document.body.removeChild(querySelector('p'))
VM982:1 Uncaught ReferenceError: querySelector is not defined
    at <anonymous>:1:15
(anonymous) @ VM982:1
document.body.removeChild('p')
VM1029:1 Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at <anonymous>:1:15
(anonymous) @ VM1029:1
p.remove();
VM1036:1 Uncaught ReferenceError: p is not defined
    at <anonymous>:1:1
(anonymous) @ VM1036:1
elem2.remove();
undefined