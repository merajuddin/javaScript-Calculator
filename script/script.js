function fun(num){
	document.frm.result.value += num;
}

function plus(){
	document.frm.result.value += "+";
}

function minus(){
	document.frm.result.value += "-";
}

function multiply(){
	document.frm.result.value += "*";
}

function divide(){
	document.frm.result.value += "/";
}

function dot(){
	document.frm.result.value += ".";
}

function mod(){
	document.frm.result.value += "%";
}

function clr(){
	document.frm.result.value = "";
}

function calculation(){
	var total = eval(document.frm.result.value)
	document.frm.result.value = total;
}