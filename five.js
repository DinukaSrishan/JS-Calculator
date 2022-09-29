function fn1(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 1;
}
function fn2(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 2;
}
function fn3(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 3;
}
function fn4(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}
function fn5(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}

function fn6(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}

function fn7(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}

function fn8(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}
function fn9(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}
function fn0(){
    var previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}

function fnAc(){
    document.getElementById("display").innerHTML = "";
}
var firstSave;
var op;

function add(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =  "";
    op = 1;

}

function sub(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 2;
}

function mul(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 3;
}

function div(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 4;
}

function equ(){
    var secondSave = document.getElementById("display").innerHTML;
    if (op == 1){
        document.getElementById("display").innerHTML = parseInt(firstSave) + parseInt(secondSave);
    }
    else if( op == 2){
        document.getElementById("display").innerHTML = parseInt(firstSave) - parseInt(secondSave);
    }
    else if( op == 3){
        document.getElementById("display").innerHTML = parseInt(firstSave) * parseInt(secondSave);
    }
    else if( op == 4){
        document.getElementById("display").innerHTML = parseInt(firstSave) / parseInt(secondSave);
    }
    else {
        document.getElementById("display").innerHTML = "Invalid Calculation";
    }
    
}

