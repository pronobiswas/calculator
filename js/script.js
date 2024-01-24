// ==========output==========
let heading = document.querySelector("#hello");
let result = document.querySelector("#result");


// ======change====

result.onfullscreenchange = cgn;
 function cng(){
    if (result.innerHTML.length > 4) {
        result.innerHTML = result.innerHTML.slice(0,1);
      }
};

// =======number btn==========
let eqqale = document.querySelector("#eqqale");
let clears = document.querySelector("#clears");

// ========button inovoketion=========
clears.addEventListener("click", function(){
    console.log(result.innerHTML);
    
})
