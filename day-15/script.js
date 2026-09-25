const myDiv = document.getElementById('myDiv');

myDiv.textContent = 'Hello, Univers!';

const myClass = document.getElementsByClassName('myClass')[0];
myClass.innerText = 'This is a class element.';

const para = document.getElementsByTagName('p')[0];
para.innerHTML = '<b>This</b> is a paragraph element.';

const testId = document.querySelector('#testId');
testId.textContent = 'This is an element selected by ID using querySelector.';

const testClass = document.querySelector('.testClass');
testClass.textContent = 'This is an element selected by class using querySelector.';

const testClass2 = document.querySelectorAll('.testClass')[1];
testClass2.textContent = 'This is the second element selected by class using querySelectorAll.';

const pTag = document.querySelectorAll('p')[1];
pTag.textContent = 'This is the second paragraph element.';
pTag.setAttribute('style', 'color: blue; font-size: 18px;');

const div4 = document.querySelectorAll('div')[3];
const div4ClassName = div4.getAttribute('class');
console.log(div4ClassName);
div4.style.backgroundColor = 'lightgreen';
div4.style.padding = '10px';
div4.style.border = '2px solid black';
div4.style.borderRadius = '5px';
div4.style.textAlign = 'center';
div4.style.fontSize = '20px';

const div5 = document.querySelectorAll('div')[4];
div5.style.cssText = 'color: red; font-weight: bold; font-size: 22px; text-align: center; background-color: lightyellow; padding: 15px; border: 2px dashed orange; border-radius: 10px;';

const myInfo = document.getElementById('myInfo');
myInfo.style.cssText = 'color: darkblue; font-size: 20px; text-align: center; background-color: lightgray; padding: 20px; border: 2px solid navy; border-radius: 10px;';
const h1 = document.createElement('h1');
h1.textContent = 'My Name is John Doe';
h1.style.cssText = 'color: purple; font-size: 24px; text-align: center;';
const p = document.createElement('p');
p.textContent = 'I am a web developer with a passion for creating interactive and user-friendly web applications.';
p.style.cssText = 'color: gray; font-size: 18px; text-align: center;';
const button = document.createElement('button');
button.textContent = 'Click Me';
button.style.cssText = 'display: block; margin: 20px auto; padding: 10px 20px; font-size: 16px; background-color: lightblue; border: none; border-radius: 5px; cursor: pointer;';
myInfo.appendChild(h1);
myInfo.appendChild(p);
myInfo.appendChild(button);

const ch2 = document.getElementById('ch2');
ch2.addEventListener('click', () => {
    alert('ho ho ho');
})