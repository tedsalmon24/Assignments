//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num--;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function increases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

//The following function is called when "Sub" button is clicked.
//Note that it also changes the values of the global variables.
function sub() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Sub";
    }
}

//The following function is called when "Multi" button is clicked.
//Note that it also changes the values of the global variables.
function multi() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multi";
    }
}

//The following function is called when "Div" button is clicked.
//Note that it also changes the values of the global variables.
function div() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Div";
    }
}

//The following function is called when "Pwr" button is clicked.
//Note that it also changes the values of the global variables.
function pwr() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Pwr";
    }
}

//The following function squares the given value.
//isNaN method checks whether the value passed to the method is a number or not.
function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = num * num;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function takes the square root of a number.
//isNaN method checks whether the value passed to the method is a number or not.
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.sqrt(num);
    }
}

//The following function floors the value.
//isNaN method checks whether the value passed to the method is a number or not.
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.floor(num);
    }
}

//The following function rounds the value.
//isNaN method checks whether the value passed to the method is a number or not.
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        document.frmCalc.txtNumber.value = Math.round(num);
    }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        if (calc == "Add") {
            var total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Sub") {
            var total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Multi") {
            var total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Div") {
            var total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        } else if (calc == "Pwr") {
            var total = Math.pow(prevCalc, num);
            document.frmCalc.txtNumber.value = total;
        }
    }
}

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}
