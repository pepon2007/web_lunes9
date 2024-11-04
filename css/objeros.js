
    
    function calcularPrecioTotal(cantidad){
        const precioUnitario = 119;
        const cantidadFloat = parseFloat(cantidad);
    
    
        if(isNaN(cantidadFloat)){
            console.log("Por favor, ingresa una cantidad válida")
        } else {
            const total = precioUnitario * cantidadFloat;
            console.log(`Total a pagar: ${total.toFixed(2)}`);
        }
    }
    const inputCantidad = prompt("Ingresa la cantidad de productos: ");
    calcularPrecioTotal(inputCantidad);