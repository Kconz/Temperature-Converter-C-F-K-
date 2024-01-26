const cel = document.querySelector('#cel');
const fahren = document.querySelector('#fahren');
const kelvin = document.querySelector('#kelvin');

// class function converter all temperature (new)
class Converter {
    constructor(value) {
        this.value = value;
    }
    //c > f
    celsiusTofahren = (value) => {
        return (((9 / 5) * (value) + 32).toFixed(2));
    }
    //c > k
    celsiusToKelvin = (value) => {
        return (+value + 273);
    }

    //f > c 
    fahrenTocelsius = (value) => {
        return ((5 / 9) * (value - 32)).toFixed(2);
    }
    //f > k
    fahrenToKelvin = (value) => {
        return ((5 / 9) * (value - 32) + 273.15).toFixed(2);
    }
    //k > c
    kelvinToCelsius = (value) => {
        return (value - 273);
    }
    //k > f 
    kelvinToFahrenheit = (value) => {
        return ((9 / 5) * (value - 273) + 32).toFixed(2);
    }

}
let calculator = new Converter();
// converter old 
//c > f
// const celsiusTofahren = (value) => {
//     return (((9 / 5) * (+value) + 32).toFixed(2));
// }
//c > k
// const celsiusToKelvin = (value) => {
//     return (+value + 273);
// }

// //f > c 
// const fahrenTocelsius = (value) => {
//     return ((5 / 9) * (+value - 32)).toFixed(2);
// }
// //f > k
// const fahrenToKelvin = (value) => {
//     return ((5 / 9) * (+value - 32) + 273.15).toFixed(2);
// }
// //k > c
// const kelvinToCelsius = (value) => {
//     return (+value - 273);
// }
// //k > f 
// const kelvinToFahrenheit = (value) => {
//     return ((9 / 5) * (+value - 273) + 32).toFixed(2);
// }


//fn cel to faren and kevin 
cel.addEventListener('keyup', () => {
    //Fahrenheit 
    const resultFah = calculator.celsiusTofahren(parseInt(cel.value));
    fahren.value = resultFah;
    //Kelvin
    const resultKelvin = calculator.celsiusToKelvin(cel.value);
    kelvin.value = resultKelvin;
});
// fn fah to celsius and kelvin
fahren.addEventListener('keyup', () => {
    //Celsius
    const resultCelsius = calculator.fahrenTocelsius(fahren.value);
    cel.value = resultCelsius;

    //Kelvin
    const resultKevin = calculator.fahrenToKelvin(fahren.value);
    kelvin.value = resultKevin;
})

//fn kelvin to Celsius and fah
kelvin.addEventListener('keyup', () => {
    //Celsius
    const resultCelsius = calculator.kelvinToCelsius(kelvin.value);
    cel.value = resultCelsius;
    //Fahrenheit
    const resultFahrenheit = calculator.kelvinToFahrenheit(kelvin.value);
    fahren.value = resultFahrenheit;
})