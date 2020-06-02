// store the screen as a variable
var scr = document.getElementById('scr');

// store the button numbers
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');

// store the button operations
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');

// store the equal  / clear button
var btnEql = document.getElementById('btnEql');
var btnClr = document.getElementById('btnClr');
var btnDel = document.getElementById('btnDel');


// reset the screen with C
btnClr.onclick = function () {
	scr.innerHTML = '';
};

function addToScreen(e) {
	var btn = e.target;
	switch(btn.id) {
        case 'btnSum':
            scr.innerHTML += '+';
            break;
        case 'btnSub':
            scr.innerHTML += '-';
            break;
        case 'btnMul':
            scr.innerHTML += 'x';
            break;
        case 'btnDiv':
            scr.innerHTML += '/';
            break;
        // if not an operation => number, get by last digit ID
        default:
        	scr.innerHTML += btn.id.charAt(btn.id.length - 1);
        	break;
	}
}

// add ability to remove last character
document.addEventListener('keydown', logKey);

function logKey(k) {
	let n = k.keyCode;
	// supr key
	if (n === 8) {
		eraseLast();
	} 
	// problem / no value for '+''
	// add numbers or operation
	else if ((n <= 57 && n >= 48) || [88, 189, 191].includes(n)) {
		scr.innerHTML += k.key;
	} 
	// enter key
	else if (n == 13) {
		compute();
	}
}

btn0.onclick = addToScreen;
btn1.onclick = addToScreen;
btn2.onclick = addToScreen;
btn3.onclick = addToScreen;
btn4.onclick = addToScreen;
btn5.onclick = addToScreen;
btn6.onclick = addToScreen;
btn7.onclick = addToScreen;
btn8.onclick = addToScreen;
btn9.onclick = addToScreen;
btnSum.onclick = addToScreen;
btnSub.onclick = addToScreen;
btnMul.onclick = addToScreen;
btnDiv.onclick = addToScreen;


function eraseLast() {
	scr.innerHTML = scr.innerHTML.slice(0, -1);
}

function compute() {
	// get the expression on screen
	let expr = scr.innerHTML;

	// create regex for numbers and operations
	let re = /\d+/g;
	let reS = /[^0-9]/;
	let result;

	let numbers = expr.match(re);

	// for now only do one operation
	let operation = expr.match(reS)[0];

	a = parseInt(numbers[0], 10);
    b = parseInt(numbers[1], 10);

	switch(operation) {
		case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = Math.floor(a / b);
            break; 
	}

	scr.innerHTML = result;
}

btnEql.onclick = compute;
btnDel.onclick = eraseLast;