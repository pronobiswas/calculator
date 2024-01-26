let display = document.querySelector(".display");

let btnNine = document.querySelector(".btnnine");
let btnEight = document.querySelector(".btneight");
let btnSeven = document.querySelector(".btnseven");
let btnSix = document.querySelector(".btnsix");
let btnFive = document.querySelector(".btnfive");
let btnFour = document.querySelector(".btnfour");
let btnThree = document.querySelector(".btnthree");
let btnTWO = document.querySelector(".btntwo");
let btnOne = document.querySelector(".btnone");
let btnZero = document.querySelector(".btnzero");

let btnPlus = document.querySelector(".btnplus");
let btnMainus = document.querySelector(".btnmainus");
let btnMulti = document.querySelector(".btnmulti");
let btnDivision = document.querySelector(".btndivision");
let btnDshomik = document.querySelector(".btndshomik");

let btnOutput = document.querySelector(".btnoutput");
let btnClear = document.querySelector(".btnclear");
let btnDelete = document.querySelector(".btndelete");

btnNine.addEventListener("click", function () {
    display.value += `9`
});
btnEight.addEventListener("click", function () {
    display.value += `8`
});
btnSeven.addEventListener("click", function () {
    display.value += `7`
});
btnSix.addEventListener("click", function () {
    display.value += `6`
});
btnFive.addEventListener("click", function () {
    display.value += `5`
});
btnFour.addEventListener("click", function () {
    display.value += `4`
});
btnThree.addEventListener("click", function () {
    display.value += `3`
});
btnTWO.addEventListener("click", function () {
    display.value += `2`
});
btnOne.addEventListener("click", function () {
    display.value += `1`
});
btnZero.addEventListener("click", function () {
    display.value += `0`
});

btnDshomik.addEventListener("click", function () {
    display.value += `.`
});
btnDivision.addEventListener("click", function () {
    display.value += `/`
});
btnMulti.addEventListener("click", function () {
    display.value += `*`
});
btnMainus.addEventListener("click", function () {
    display.value += `-`
});
btnPlus.addEventListener("click", function () {
    display.value += `+`
    
});

btnOutput.addEventListener("click", function () {
    let getResult = display.value;
    let getOutput = eval(getResult);
    display.value = getOutput;
});

btnClear.addEventListener("click", function () {
    display.value = ""
});