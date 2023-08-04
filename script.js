// script.js
const celsiusElem = document.querySelector("#resultfinal");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType1 = document.querySelector("#temp-type1");
const tempType2 = document.querySelector("#temp-type2");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convert();
});

function convert() {
    let inputValue = degree.value;

    if (tempType1.value === "fahrenheit"){

      if (tempType2.value === "fahrenheit"){
        const ftof = inputValue;
        document.getElementById("resultfinal").innerHTML=ftof;
        return;
      }
      else if(tempType2.value === "kelvin"){
        console.log(typeof(inputValue));
        const ftok = (inputValue - 32) * 5 / 9 + 273.15;
        document.getElementById("resultfinal").innerHTML=ftok;
        return;
      }
      else if(tempType2.value === "celcius"){
        const ftoc = (inputValue - 32) * (5/9);
        document.getElementById("resultfinal").innerHTML=ftoc;
        return;
      }

    }
    else if (tempType1.value === "kelvin"){

      if (tempType2.value === "fahrenheit"){
        const ktof = (inputValue - 273.15) * (9/5) + 32; 
        document.getElementById("resultfinal").innerHTML=ktof;
        return;
      }
      else if(tempType2.value === "kelvin"){
        const ktok = inputValue;
        document.getElementById("resultfinal").innerHTML=ktok;
        return;
      }
      else if(tempType2.value === "celcius"){
        const ktoc = inputValue - 273.15;
        document.getElementById("resultfinal").innerHTML=ktoc;
        return;
      }

    }
    else if (tempType1.value === "celcius"){

      if (tempType2.value === "fahrenheit"){
        const ctof = (9/5) * inputValue + 32;
        document.getElementById("resultfinal").innerHTML=ctof;
        return;
      }
      else if(tempType2.value === "kelvin"){
        const ctok = Number(inputValue) + 273.15 ;
        document.getElementById("resultfinal").innerHTML = ctok ;
        return;
      }
      else if(tempType2.value === "celcius"){
        const ctoc = inputValue;
        document.getElementById("resultfinal").innerHTML=ctoc;
        return;
      }

    }
}




















// celcius-value  -> result-value
// id= celcius    -> id resultfinal



    // if (tempType1.value === "fahrenheit") {
    //     const FahrenheitToCelsius = (inputValue ) ;
    //     // celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} `;
    //     document.getElementById("resultfinal").innerHTML=FahrenheitToCelsius;
    //     return;
    // } else if (tempType.value === "kelvin") {
    //     const KelvinToCelsius = inputValue - 273.15;
    //     celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    // }