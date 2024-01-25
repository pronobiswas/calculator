// ==========output==========
let heading = document.querySelector("#hello");
let result = document.querySelector("#result");

// =======number btn==========
let eqqale = document.querySelector("#eqqale");
let clears = document.querySelector("#clears");
// =======number btn==========


// ======change====
let logRessult = result.innerHTML;
// ======change====



// ========button inovoketion=========
clears.addEventListener("click", function(){
    console.log(result.innerHTML);
    console.log(typeof result.innerHTML);

    let myArray = result.innerHTML.split("+");
    let firstOperand = parseInt(myArray[0]);
    let secondOperand = parseInt(myArray[1]);
    let thirdOperand = parseInt(myArray[2]);
    let txt = "";

    // myArray.forEach(myFunctioN);
    // function myFunctioN(value, index, array){
    //     txt += parseInt(value);
    //     console.log(txt)

    //     let i,len,text;
    // for (i = 0, len = myArray.length, text = ""; i < len; i++){
    //     text += parseInt(myArray[0]);
    //     console.log(text)
    // }
    // }

    console.log(myArray);
    console.log( firstOperand);
    console.log( secondOperand);
    console.log(firstOperand + secondOperand);
    // let i,len,text;
    // for (i = 0, len = myArray.length, text = ""; i < len; i++){
    //     text += myArray[0];
    //     console.log(text)
    // }

})
