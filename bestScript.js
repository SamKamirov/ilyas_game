let number = document.querySelectorAll('.number')[0];
let alls = document.querySelectorAll('.all')[0];
let number1 = document.querySelectorAll('.number1')[0];
let sum = document.querySelectorAll('.sum')[0];
let addNumber = document.querySelectorAll('.add')[0];
var articleDiv = document.querySelectorAll('.article')[0];
let choiseDiv = document.querySelectorAll('.choise')[0];
let oneButton = document.querySelectorAll('.choise_one')[0];
let elevenButton = document.querySelectorAll('.choise_eleven')[0];
let number_d = document.querySelectorAll('.number-d')[0];
let number1_d = document.querySelectorAll('.number1-d')[0];
let sum_d = document.querySelectorAll('.sum-d')[0];
let stopButton = document.querySelectorAll('.stop')[0];
let start = document.querySelectorAll('.start')[0];
let point = document.querySelectorAll('.point')[0];
let point_d = document.querySelectorAll('.point-d')[0];
let start_menu = document.querySelectorAll('.start_menu')[0];
let results = document.querySelectorAll('.results')[0];
let results1 = document.querySelectorAll('.results1')[0];
let results2 = document.querySelectorAll('.results2')[0];
let balance = document.querySelectorAll('.balance')[0];
let bids = document.querySelectorAll('.bids')[0];
let bid = document.querySelectorAll('.bid')[0];
let range = document.querySelectorAll('.range')[0];
let texts = document.querySelectorAll('.text')[0];
let min = document.querySelectorAll('.min')[0];
let max = document.querySelectorAll('.max')[0];
let count = document.querySelectorAll('.count')[0];
let enter = document.querySelectorAll('.enter')[0];
let returned = document.querySelectorAll('.return');
let end_menu = document.querySelectorAll('.end_menu')[0];
let reload = document.querySelectorAll('.reload')[0];
let advertising = document.querySelectorAll('.advertising')[0];
let win = document.querySelectorAll('.win')[0];
let draw = document.querySelectorAll('.draw')[0];
let lose = document.querySelectorAll('.lose')[0];

let mas = ['21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44', '51', '52', '53', 
	'54', '61', '62', '63', '64', '71', '72', '73', '74', '81', '82', '83', '84',
	'91', '92', '93', '94', '101', '102', '103', '104', '111', '112', '113', '114'];
//let mas1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let masA = ['1', '2', '3', '4'];

addNumber.disabled = true;
stopButton.disabled = true;
addNumber.style.cursor = "not-allowed";
stopButton.style.cursor = "not-allowed";

function startButtonClick(){
	start.style.display = "none";
	sum.style.display = "block";
	point.style.display = "block";
	sum_d.style.display = "block";
	point_d.style.display = "block";
	start_menu.style.display = "none";
	balance.style.opacity = 100;
	bids.style.opacity = 100;
	bid.style.opacity = 100;
	advertising.style.opacity = 100;
}

function rangeInput(){
	texts.value = range.value;
}

function textsInput(){
	range.value = texts.value;
}

function minClick(){
	texts.value = "100";
	range.value = 100;
}

function maxClick(){
	texts.value = "1000";
	range.value = 1000;
}

function enterClick(){
	if(Number(count.textContent) >= Number(texts.value)){
		texts.disabled = true;
		range.disabled = true;
		min.disabled = true;
		max.disabled = true;
		enter.disabled = true;
		addNumber.disabled = false;
		stopButton.disabled = false;
		addNumber.style.cursor = "grab";
		stopButton.style.cursor = "grab";
	}else{
		alert('У тебя проблемы с математикой!');
	}
}

let mastN;
let mast;

number.setAttribute("numVal", Math.round(Math.random() * 9 + 2));  // Добавляем атрибут с рандомным значением

if(sum.textContent == 21)
{
	//alert('You win!');
	stopButton.disabled = true;
	addNumber.disabled = true;
	addNumber.style.cursor = "not-allowed";
	stopButton.style.cursor = "not-allowed";
}



let re;
for (var i = 2; i <= 11; i++) 
{
	
	if(number.getAttribute("numVal") == i)	// Сравниваем значение атрибута, чтобы добавить картинку
	{	
		mastN = Math.round(Math.random() * 3 + 0);
		for (var j = 0; j < masA.length; j++) 
		{
			if (mastN == j) 
			{
				mast = masA[j];
			}
		}

		let res = String(i) + String(mast);
		console.log(res);

		for (var p = 0; p < mas.length; p++) 
		{
			if (mas[p] == res) 
			{
				mas.splice(p, 1);
			}
		}

		const image = document.createElement('img');
		image.src  = "/bestCardPictures/" + String(i) + String(mast) + '.png';
		image.style.height = '185px';
		image.style.margin = '5px';
		document.querySelector('.number').appendChild(image);
		image.setAttribute("id", "num1"); // добавление id
	}
}

let roo;
let w = 0;
while (w != 1)
{
	roo = Math.round(Math.random() * 9 + 2);
	number1.setAttribute("numVal", roo);
	console.log(number1.getAttribute("numVal"));
	mastN = Math.round(Math.random() * 3 + 0);
	
	for (var j = 0; j < masA.length; j++) 
	{
		if (mastN == j) 
		{
			mast = masA[j];
		}
	}
	re = String(roo) + String(mast);
	
	for (var e = 0; e < mas.length; e++) 
	{
		if (re == mas[e]) 
		{
			const image = document.createElement('img');
			image.src  = "/bestCardPictures/" + re + '.png';
			image.style.height = '185px';
			image.style.margin = '5px';
			document.querySelector('.number1').appendChild(image);
			image.setAttribute("id", "num2"); // добавление id
			sum.textContent = Number(number.getAttribute("numVal")) + Number(number1.getAttribute("numVal"));
			for (var p = 0; p < mas.length; p++) 
			{
				if (mas[p] == re) 
				{
					mas.splice(p, 1);
				}
			}
			w = 1;
			break;
		}
	}
}

w = 0;
while (w != 1)
{
	roo = Math.round(Math.random() * 9 + 2);
	number_d.setAttribute("numVal", roo);
	mastN = Math.round(Math.random() * 3 + 0);
	
	for (var j = 0; j < masA.length; j++) 
	{
		if (mastN == j) 
		{
			mast = masA[j];
		}
	}
	re = String(roo) + String(mast);
		
	for (var e = 0; e < mas.length; e++) 
	{
		if (re == mas[e]) 
		{
			const image = document.createElement('img');
			image.src  = "/bestCardPictures/" + re + '.png';
			image.style.height = '185px';
			image.style.margin = '5px';
			document.querySelector('.number-d').appendChild(image);
			image.setAttribute("id", "num1-d"); // добавление id
			sum_d.textContent = Number(number_d.getAttribute("numVal"));
			
			for (var p = 0; p < mas.length; p++) 
			{
				if (mas[p] == re) 
				{
					mas.splice(p, 1);
				}
			}
			w = 1;
			break;
		}
	}
}

if(sum.textContent == 21)
{
	//alert('You win!');
	stopButton.disabled = true;
	addNumber.disabled = true;
}

function addNumberClick(){
	
let res;
let root;
let w = 0;
while (w != 1)
{
	root = Math.round(Math.random() * 9 + 2);
	mastN = Math.round(Math.random() * 3 + 0);
	
	for (var j = 0; j < masA.length; j++) 
	{
		if (mastN == j) 
		{
			mast = masA[j];
		}
	}
	res = String(root) + String(mast);

	for (var e = 0; e < mas.length; e++) 
	{
		if (res == mas[e])
		{
			if(root == 11)
			{
				addNumber.style.display = "none";
				choiseDiv.style.display = "block";

				for (var p = 0; p < mas.length; p++) 
				{
					if (mas[p] == res) 
					{
						mas.splice(p, 1);
					}
				}
			}
			else
			{
				sum.textContent = Number(sum.textContent) + Number(root);
				const image = document.createElement('img');
				//image.src  = "../best 21/bestCardPictures/" + String(i) + String(mast) + '.png';
				image.src  = "/bestCardPictures/" + String(res) + '.png';
				image.style.height = '185px';
				image.style.margin = '5px';
				document.querySelector('.number1').appendChild(image);
				image.classList.add("added"); // добавление класса
				
				for (var p = 0; p < mas.length; p++) 
				{
					if (mas[p] == res) 
					{
						mas.splice(p, 1);
					}
				}
			}
				
			if(sum.textContent >= 22)
			{
				addNumber.style.cursor = "not-allowed";
				stopButton.style.cursor = "not-allowed";
				results2.style.display = "block";
				point_d.style.display = "none";
				sum_d.style.display = "none";
				stopButton.disabled = true;
				addNumber.disabled = true;
				count.textContent = Number(count.textContent) - Number(texts.value);
				lose.textContent = texts.value;
			}
			
			w = 1;
			break;
		}
	}
}
}

function oneButtonClick(){
	root = 11;
	sum.textContent = Number(sum.textContent) + Number(1);
	addNumber.style.display = "block";
	choiseDiv.style.display = "none";
	let masti = Math.round(Math.random() * 3 + 1);
	const image = document.createElement('img');
	image.src  = "/bestCardPictures/" + root + String(masti) + ".png";
	image.style.height = '185px';
	image.style.margin = '5px';
	document.querySelector('.number1').appendChild(image);
	image.classList.add("added"); // добавление класса
	if(sum.textContent >= 21){
		//alert('You lose(');
		stopButton.disabled = true;
		addNumber.disabled = true;
		addNumber.style.cursor = "not-allowed";
		stopButton.style.cursor = "not-allowed";
	}
}

function elevenButtonClick(){
	root = 11;
	sum.textContent = Number(sum.textContent) + Number(root);
	addNumber.style.display = "block";
	choiseDiv.style.display = "none";
	let masti = Math.round(Math.random() * 3 + 1);
	const image = document.createElement('img');
	image.src  = "/bestCardPictures/" + root + String(masti) + ".png";
	image.style.height = '185px';
	image.style.margin = '5px';
	document.querySelector('.number1').appendChild(image);
	image.classList.add("added"); // добавление класса
	if(sum.textContent >= 21){
		//alert('You lose(');
		stopButton.disabled = true;
		addNumber.disabled = true;
		addNumber.style.cursor = "not-allowed";
		stopButton.style.cursor = "not-allowed";
	}
}

function stopButtonClick(){
	addNumber.disabled = true;
	stopButton.disabled = true;
	addNumber.style.cursor = "not-allowed";
	stopButton.style.cursor = "not-allowed";
	point_d.style.display = "none";
	sum_d.style.display = "none";
	//number1_d.textContent = Math.round(Math.random() * 9 + 2);
	
	let res;
	let root;
	let w = 0;

	while (sum_d.textContent < 17)
	{
		w = 0;
		while (w != 1)
		{
			root = Math.round(Math.random() * 9 + 2);
			mastN = Math.round(Math.random() * 3 + 0);
			
			for (var j = 0; j < masA.length; j++) 
			{
				if (mastN == j) 
				{
					mast = masA[j];
				}
			}
			res = String(root) + String(mast);
	
			for (var e = 0; e < mas.length; e++) 
			{
				if (res == mas[e]) 
				{
					const image = document.createElement('img');
					image.src  = "/bestCardPictures/" + res + '.png';
					image.style.height = '185px';
					image.style.margin = '5px';
					document.querySelector('.number-d').appendChild(image);
					image.classList.add("added"); // добавление класса
					sum_d.textContent = Number(sum_d.textContent) + Number(root);
					
					for (var p = 0; p < mas.length; p++) 
					{
						if (mas[p] == res) 
						{
							mas.splice(p, 1);
						}
					}
					break;
				}
			}
			w = 1;
			break;
		}
	}

	for (var i = 0; i < mas.length; i++) {
		console.log(mas[i]);
	}

	number1_d.style.display = "none";
	sum_d.style.display = "none";

	if(Number(sum.textContent) < 22 && Number(sum_d.textContent) > 21 || Number(sum.textContent) == 21 || Number(sum.textContent) < 22 && Number(sum_d.textContent) < 21 && Number(sum.textContent) > Number(sum_d.textContent))
	{
		results.style.display = "block";
		//point_d.style.display = "none";
		//sum_d.style.display = "none";
		//alert('You win!');
		stopButton.disabled = true;
		addNumber.disabled = true;
		count.textContent = Number(count.textContent) + Number(texts.value);
		win.textContent = texts.value;
	}
	else if (Number(sum.textContent) == Number(sum_d.textContent) && Number(sum.textContent) < 22)
	{
		results1.style.display = "block";
		//point_d.style.display = "none";
		//sum_d.style.display = "none";
		//alert('Draw');
		stopButton.disabled = true;
		addNumber.disabled = true;
		draw.textContent = texts.value;
	}
	else
	{
		results2.style.display = "block";
		//point_d.style.display = "none";
		//sum_d.style.display = "none";
		//alert('You lose(');
		stopButton.disabled = true;
		addNumber.disabled = true;
		count.textContent = Number(count.textContent) - Number(texts.value);
		lose.textContent = texts.value;
	}


}
//function returnedClick(){
//	location.reload()
//	start_menu.style.display = "none";
//}

function returnedClick(){
		if(count.textContent == 0){
		end_menu.style.display = "block";
		alls.style.display = "none";
	}
	results.style.display = "none";
	results1.style.display = "none";
	results2.style.display = "none";
	point_d.style.display = "block";
	sum_d.style.display = "block";
	
	addNumber.disabled = true;
	stopButton.disabled = true;
	texts.disabled = false;
	range.disabled = false;
	min.disabled = false;
	max.disabled = false;
	enter.disabled = false;
	addNumber.style.cursor = "not-allowed";
	stopButton.style.cursor = "not-allowed";

	let numbersAdd = document.getElementsByClassName("added");
	for	(let d = 0; d < numbersAdd.length; d++)
	{
		numbersAdd[d].style.display = "none";
	}
	number1_d.style.display = "block";
	
	mas = ['21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44', '51', '52', '53', 
	'54', '61', '62', '63', '64', '71', '72', '73', '74', '81', '82', '83', '84',
	'91', '92', '93', '94', '101', '102', '103', '104', '111', '112', '113', '114'];

number.setAttribute("numVal", Math.round(Math.random() * 9 + 2));  // Добавляем атрибут с рандомным значением

if(sum.textContent == 21)
{
	//alert('You win!');
	stopButton.disabled = true;
	addNumber.disabled = true;
	addNumber.style.cursor = "not-allowed";
	stopButton.style.cursor = "not-allowed";
}

for (var i = 2; i <= 11; i++) 
{
	
	if(number.getAttribute("numVal") == i)	// Сравниваем значение атрибута, чтобы добавить картинку
	{	
		mastN = Math.round(Math.random() * 3 + 0);
		for (var j = 0; j < masA.length; j++) 
		{
			if (mastN == j) 
			{
				mast = masA[j];
			}
		}

		let res = String(i) + String(mast);
		console.log(res);

		for (var p = 0; p < mas.length; p++) 
		{
			if (mas[p] == res) 
			{
				mas.splice(p, 1);
			}
		}
		let child = document.getElementById("num1");
		number.removeChild(child);
		const image = document.createElement('img');
		image.src  = "/bestCardPictures/" + String(i) + String(mast) + '.png';
		image.style.height = '185px';
		image.style.margin = '5px';
		document.querySelector('.number').appendChild(image);
		image.setAttribute("id", "num1"); // добавление id
	}
}
 w = 0;
while (w != 1)
{
	roo = Math.round(Math.random() * 9 + 2);
	number1.setAttribute("numVal", roo);
	console.log(number1.getAttribute("numVal"));
	mastN = Math.round(Math.random() * 3 + 0);
	
	for (var j = 0; j < masA.length; j++) 
	{
		if (mastN == j) 
		{
			mast = masA[j];
		}
	}
	re = String(roo) + String(mast);
	
	for (var e = 0; e < mas.length; e++) 
	{
		if (re == mas[e]) 
		{
			let child = document.getElementById("num2");
			number1.removeChild(child);
			const image = document.createElement('img');
			image.src  = "/bestCardPictures/" + re + '.png';
			image.style.height = '185px';
			image.style.margin = '5px';
			document.querySelector('.number1').appendChild(image);
			image.setAttribute("id", "num2"); // добавление id
			sum.textContent = Number(number.getAttribute("numVal")) + Number(number1.getAttribute("numVal"));
			for (var p = 0; p < mas.length; p++) 
			{
				if (mas[p] == re) 
				{
					mas.splice(p, 1);
				}
			}
			w = 1;
			break;
		}
	}
}

w = 0;
while (w != 1)
{
	roo = Math.round(Math.random() * 9 + 2);
	number_d.setAttribute("numVal", roo);
	mastN = Math.round(Math.random() * 3 + 0);
	
	for (var j = 0; j < masA.length; j++) 
	{
		if (mastN == j) 
		{
			mast = masA[j];
		}
	}
	re = String(roo) + String(mast);
		
	for (var e = 0; e < mas.length; e++) 
	{
		if (re == mas[e]) 
		{
			let child = document.getElementById("num1-d");
			number_d.removeChild(child);
			const image = document.createElement('img');
			image.src  = "/bestCardPictures/" + re + '.png';
			image.style.height = '185px';
			image.style.margin = '5px';
			document.querySelector('.number-d').appendChild(image);
			image.setAttribute("id", "num1-d"); // добавление id
			sum_d.textContent = Number(number_d.getAttribute("numVal"));
			
			for (var p = 0; p < mas.length; p++) 
			{
				if (mas[p] == re) 
				{
					mas.splice(p, 1);
				}
			}
			w = 1;
			break;
		}
	}
}

if(sum.textContent == 21)
{
	alert('You win!');
	stopButton.disabled = true;
	addNumber.disabled = true;
}

function returnedClick(){
	results.style.display = "none";
	point_d.style.display = "block";
	sum_d.style.display = "block";
	let im = document.querySelectorAll("img");
	let m = document.getElementsByTagName("img");
	for	(let d = 0; d < m.length; d++)
	{
		articleDiv.remove(m[d]);
		articleDiv_d.remove(m[d]);
	}
}
}

function reloadClick(){
	location.reload();
}

for (let i = 0; i < returned.length; i++){
	returned[i].addEventListener('click', returnedClick);
}
min.addEventListener('click', minClick);
reload.addEventListener('click', reloadClick);
max.addEventListener('click', maxClick);
enter.addEventListener('click', enterClick)
texts.addEventListener('input', textsInput);
range.addEventListener('input', rangeInput);
addNumber.addEventListener('click', addNumberClick);
oneButton.addEventListener('click', oneButtonClick);
elevenButton.addEventListener('click', elevenButtonClick);
stopButton.addEventListener('click', stopButtonClick);
start.addEventListener('click', startButtonClick);








/*
const a = document.querySelectorAll('.cls');

a[0].addEventListener('click', f)
a[1].addEventListener('click', f)
a[2].addEventListener('click', f)

for (let i = 0; i < a.length; i++) {
	a[i].addEventListener('click', f);
}

a.forEach.......

function f() {
	alert('I have been clicked');
}
*/