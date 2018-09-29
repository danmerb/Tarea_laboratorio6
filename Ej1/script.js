

function newProducto(codigo, descr, tipo, pcompra, pventa, stock) {
    this.codigo = codigo;
    this.descr = descr;
    this.tipo = tipo;
    this.pcompra = pcompra;
    this.pventa = pventa;
    this.stock = stock;
}




var arrayCrea = [];
var num;
var Ventas = []
var tiendaArray = []
var acum = 0
var aux = 0

function menu(num) {


    switch (num) {
        case 1:
            console.log("Eligio Agregar producto.")
            let codigo = prompt("Ingrese el codigo");
            let descrip = prompt("Ingrese la descripcion del producto");
            let tipo = prompt("ingrese el tipo del producto");
            let pcompra = prompt("Ingrese el precio compra");
            let pventa = prompt("Ingrese el precio venta");
            let stock = prompt("Ingrese la cantidad en Stock")

            let productoNuevo = new newProducto(codigo, descrip, tipo, pcompra, pventa, stock);
            console.log(productoNuevo);
            arrayCrea.push(productoNuevo);

            break;
        case 2:
            console.log("Eligio Modificar Stock.");
            var bus = prompt("ingrese el codigo del producto a modificar");
            arrayCrea.forEach(index => {
                if (bus == element.codigos) {
                    var nuev = prompt("Ingrese la nueva cantidad");
                    element.stock = nuev;
                }
            }
            );

            break;
        case 3:
            console.log("Eligio Registrar venta y reducir stock.")
            var bus = prompt("Ingrese producto vendido");
            aux = aux + 1;
            arrayCrea.forEach(element => {
                if (bus == element.codigo) {
                    var canVent = prompt("Ingrese cantidad de venta");
                    var total = parseInt(element.stock) - cantVent;
                    acum = acum + element.precio * cantVent;
                    if (total < 0) {
                        prompt("no hay suficientes productos en la tienda")
                    } else {
                        element.stocks = total;
                    }
                }
            }
            );

            break;
        case 4:
            console.log("Eligio Mostrar promedio de ventas realizadas")
            var promedio = acum / aux;
            console.log("Promedio: " + promedio)
            break;

            break;
        case 5:
            console.log(" Eligio Mostrar productos con stock 0.")
            arrayCrea.forEach(element => {

                if (parseInt(element.stocks) == 0) {
                    tiendaArray.push(element);
                }

            });

            if (tiendaArray == 0) {
                console.log("NO HAY PRODUCTOS CON STOCK 0");
            } else {
                console.log(tiendaArray);
            }

            break;
        case 6:
            console.log("Eligio Salir del sistema.")
            console.log(arrayCrea);
            break;
        default:
            console.log("Opcion no valida")
    }
}







