let root = document.documentElement;

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

let btns = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnSum, btnSub, btnMul, btnDiv];

btns.forEach(function(btn) {
	btn.onclick = addToScreen;
});


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


theme.onclick = function() {
	let currentTheme = document.body.className;
	currentTheme === 'green-theme' ? (document.body.className = 'orange-theme') : (document.body.className = 'green-theme');
};
