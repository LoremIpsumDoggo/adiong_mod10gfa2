var operation;
var output;
var input1;
var input2;

//Very lots debug

function input(){
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    num1 = parseFloat(input1);
    num2 = parseFloat(input2);
    console.log("Values: " + num1 + " & " + num2);
}

function add(){
    input();
    operation = "+";
    output = num1 + num2;
    console.log("Add " + num1 + " & " + num2);
    result();
    return output;
}

function subtract(){
    input();
    operation = "-";
    output = num1 - num2;
    console.log("Subtract " + num1 + " & " + num2);
    result();
    return output;
}

function multiply(){
    input();
    operation = "*";
    output = num1 * num2;
    console.log("Multiply " + num1 + " & " + num2);
    result();
    return output;
}

function divide(){
    input();
    operation = "/";
    output = num1 / num2;
    console.log("Divide " + num1 + " & " + num2);
    result();
    return output;
}

function remainder(){
    input();
    operation = "%";
    output = num1 % num2;
    console.log("Remainder of " + num1 + " & " + num2);
    result();
    return output;
}

function result(){
    console.log("Result = " + output);
    document.getElementById("result").innerHTML = "Result: " + num1 + " " + operation + " " + num2 + " = " + output;
}