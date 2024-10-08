function mostrarProductos(){
    let catalogo = "Catálogo de productos: \n";
    catalogo += "1. Nagaraku pelo por pelo tam. 5mm a 14mm - $5000 \n";
    catalogo += "2. cinta hipoalergenica - $1500\n";
    catalogo += "3. pinza recta - $15000 \n";
    catalogo += "4. pinza curva - $19000 \n";
    catalogo += "5. adhesivo cherimoya - $27000 \n";
    catalogo += "6. lash shampoo - $4000 \n";
    catalogo += "7. parches hidrogel x1 uni - $180 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(
        catalogo +
        "Que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar ");

    
    if (eleccion === null || eleccion === "") {
        alert("No has ingresado un datos valido");
        continue;
    }


    if (eleccion.toLowerCase() === "salir") {
        break;
    }

    eleccion = parseInt(eleccion);

    if (isNaN(eleccion) || eleccion < 1 || eleccion > 7) {
        alert("Producto no valido, selecciona nuevamente");
        continue;
    }

    if (eleccion === 1) {
        total += 5000;
        alert("Has agregado Nagaraku pelo por pelo tam. 5mm a 14mm");
    } else if (eleccion === 2) {
        total += 1500;
        alert("Has agregado cinta hipoalergenica");
    } else if (eleccion === 3) {
        total += 15000;
        alert("Has agregado pinza recta");
    } else if (eleccion === 4) {
        total += 19000;
        alert("Has agregado pinza curva");
    } else if (eleccion === 5) {
        total += 27000;
        alert("Has agregado adhesivo cherimoya");
    } else if (eleccion === 6) {
        total += 4000;
        alert("Has agregado lash shampoo");
    }else if (eleccion === 7) {
        total += 180;
        alert("Has agregado parches hidrogel x1 uni");
    }

    let respuesta = prompt("quieres seguir comprando? (si/no)");

    if(respuesta ==="si") {
        seguirComprando = true;
    }else{
        seguirComprando = false;
    }

    }

    if (total >= 40000) {
        let cuponDescuento = total * 0.10; 
        total -= cuponDescuento;
        alert(`Se ha aplicado un descuento del 10%. Su total final es de: ${total}`);
    } else {
        alert(`Gracias por su compra. Su total es de: ${total}`);
    }
}

comprarProducto();