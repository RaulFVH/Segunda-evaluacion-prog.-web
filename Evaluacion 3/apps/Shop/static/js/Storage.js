function reiniciarStorage(){
    array = [
        {
            sku:11000,
            nombre:"Regadera metalica",
            precio:14990
        },
        {
            sku:12000,
            nombre:"Macetero de barro",
            precio:11990
        },
        {
            sku:13000,
            nombre:"Set de riego con acople",
            precio:10490
        },
        {
            sku:14000,
            nombre:"Set 3 herramietas",
            precio:13990
        },
        {
            sku:15000,
            nombre:"Macetero cuadrado",
            precio:4990
        },
        {
            sku:15000,
            nombre:"Tijeras de pasto",
            precio:12990
        },
        {
            sku:16000,
            nombre:"Planta natural",
            precio:9990
        },
        {
            sku:17000,
            nombre:"Regadera de jardineria",
            precio:7990
        },
    ];


    let cadenaString = JSON.stringify(array);
    localStorage.setItem("productos",cadenaString);
}

function obtenerProductosStorage() {
    let array = [];
    if(localStorage.getItem("productos") != null) {
        array = JSON.parse(localStorage.getItem("productos"));
    }
    return array;
}

function crearUnoStorage() {
    let sku = document.getElementById("txtSku").value;
    let nombre = document.getElementById("txtNombre").value;
    let precio = document.getElementById("txtPrecio").value;

    let array = obtenerProductosStorage();

    array.push({sku: sku, nombre: nombre, precio: precio});

    localStorage.setItem("productos", JSON.stringify(array));

    mostrarProductosTabla();
}

function mostrarProductosTabla() {
    let array = obtenerProductosStorage();

    let tablaArray = document.getElementById("tablaProductos").getElementsByTagName("tbody")[0];
    tablaArray.innerHTML = "";

    for(let i=0; i<array.length; i++) {
        let fila = document.createElement("tr");
        let celdaSku = document.createElement("td");
        let celdaNombre = document.createElement("td");
        let celdaPrecio = document.createElement("td");

        celdaSku.innerHTML = "KS" + array[i].sku + "RUR";
        celdaNombre.innerHTML = array[i].nombre;
        celdaPrecio.innerHTML = "$ " + array[i].precio;

        fila.appendChild(celdaSku);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        tablaArray.appendChild(fila);
    }
}
