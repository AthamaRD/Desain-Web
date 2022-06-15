var buttonPlus = document.querySelector('#butPlus');
var buttonMinus = document.querySelector('#butMinus');
var buttonMultiply = document.querySelector('#butMultiply');
var buttonDivision = document.querySelector('#butDivision');
var button1 = document.querySelector('#but1');
var button2 = document.querySelector('#but2');
var button3 = document.querySelector('#but3');
var button4 = document.querySelector('#but4');
var button5 = document.querySelector('#but5');
var button6 = document.querySelector('#but6');
var button7 = document.querySelector('#but7');
var button8 = document.querySelector('#but8');
var buttonPoint = document.querySelector('#butPoint');
var button9 = document.querySelector('#but9');
var button0 = document.querySelector('#but0');
var buttonAnswer = document.querySelector('#butAnswer');
var buttonReset = document.querySelector('#butReset');

const seven = () => {
	answer.value += '7';
}

const eight = () => {
	answer.value += '8';
}

const nine = () => {
	answer.value += '9';
}

const division = () => {
	answer.value += '/';
}

const four = () => {
	answer.value += '4';
}

const five = () => {
	answer.value += '5';
}

const six = () => {
	answer.value += '6';
}

const multiply = () => {
	answer.value += '*';
}

const one = () => {
	answer.value += '1';
}

const two = () => {
	answer.value += '2';
}

const three = () => {
	answer.value += '3';
}

const plus = () => {
	answer.value += '+';
}

const zero = () => {
	answer.value += '0';
}

const point = () => {
	answer.value += '.';
}

function reset(){
	answer.value = '';
}

const minus = () => {
	answer.value += '-';
}

const result = () => {
	try{
		answer.value = eval(answer.value);
	}
	catch(err){
		answer.value = 'ERROR'
		setTimeout(reset, 1000)
	}
}

button7.onclick = function(){
	seven();
}
button8.onclick = function(){
	eight();
}
button9.onclick = function(){
	nine();
}
buttonDivision.onclick = function(){
	division();
}
button4.onclick = function(){
	four();
}
button5.onclick = function(){
	five();
}
button6.onclick = function(){
	six();
}
buttonMultiply.onclick = function(){
	multiply();
}
button1.onclick = function(){
	one();
}
button2.onclick = function(){
	two();
}
button3.onclick = function(){
	three();
}
buttonPlus.onclick = function(){
	plus();
}
button0.onclick = function(){
	zero();
}
buttonPoint.onclick = function(){
	point();
}
buttonReset.onclick = function(){
	reset();
}
buttonMinus.onclick = function(){
	minus();
}
buttonAnswer.onclick = function(){
	result();
}

