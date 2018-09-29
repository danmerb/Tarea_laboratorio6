
prompt("Metros a Centímetros |  Kilómetros a Metros | Pies a Metros |   Celsius a Fahrenheit | Kelvin a Fahrenheit |  Kelvin a Celsius.")
var num;
function Conversor(val, original, convertido, tipo) {
    console.log(" 1 = medidas | 2 = temperatura");
    switch (tipo) {

        case "l":
            if (original == "m") {
                console.log("1 = centimentros | 2 = kilometros | 3 = pies")
                switch (convertido) {
                    case 1:
                        num = val * 100;
                        console.log(num + original)
                        break;
                    case 1:
                        num = val / 1000;
                        console.log(num + convertido)
                        break;
                    case 3:
                        num = val * 3;
                        console.log(num + convertido)
                        break;
                    default:
                        console.log("1 = centimentros | 2 = kilometros | 3 = pies")
                        break;
                }
                break;
            }
            if (convertido == "m") {
                console.log("1 = centimentros | 2 = kilometros | 3 = pies")
                switch (original) {
                    case 1:
                        num = val / 100;
                        console.log(num + convertido)
                        break;
                    case 2:
                        num = val * 1000;
                        console.log(num + convertido)
                        break;
                    case 3:
                        num = val / 3;
                        console.log(num + convertido)
                        break;
                    default:
                        console.log("Ingrese el correcto")
                        break;
                }
            }
            else {
                console.log(" 1 = metros | 2 = centímetros | 3 = kilometros | 4 = pies");
            }
        case 2:
            console.log("1 = celsius | 2 = fahrenheit | 3.kelvin")
            if (original == 3) {
                console.log("1 = celsius | 2 = fahrenheit")
                switch (convertido) {
                    case 1:
                        num = val - 273.15;
                        console.log(num + convertido)
                        break;
                    case 2:
                        num = ((9 / 5) * (val - 273.15)) + 32;
                        console.log(num + convertido)
                        break;
                    default:
                        console.log("1 = celsius | 2 = fahrenheit")
                        break;
                }
            }
            if (original == 2) {
                console.log(" convertir a 1 = celsius | 3 = kelvin")
                switch (convertido) {
                    case 1:
                        num = (5 / 9) * (val - 32);
                        console.log(num + convertido)
                        break;
                    case 3:
                        num = ((5 / 9) * (val - 32)) + 273.15;
                        console.log(num + convertido)
                        break;
                    default:
                        console.log("1 = celsius | 3 = kelvin")
                        break;
                }
            }

            if (original == "1") {
                console.log("  convertir a 3 = kelvin | 2 = fahrenheit")
                switch (convertido) {
                    case 3:
                        num = val + 273.15;
                        console.log(num + convertido)
                        break;
                    case 2:
                        num = ((9 / 5) * val) + 32;
                        console.log(num + convertido)
                        break;
                    default:
                        console.log(" 3 = kelvin | 2 = fahrenheit")
                        break;
                }
            }
            break;

        default:
            console.log(" Escriba  1 = medidas | 2 = temperatura")
            break;
    }
}





