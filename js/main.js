const PinCorrecto = "123456";
const UsuarioCorrecto = "usuario";

function login(usuario,pin){
if (usuario == UsuarioCorrecto){
    if (pin = PinCorrecto){
        return true
    }
    else{return false}
} else {return false}
};

for (let i=2;i>=0;i--){
    let usuario = prompt("Ingrese Usuario")
    let pin = prompt("Ingrese Contraseña")
    const ingresar = login(usuario,pin)
    if(ingresar){
        break;
    }else {
        alert("Datos Incorrectos")
    }
};

/*const PrecioArnes = 300;
const PrecioCorrea = 100;
const PrecioCollar = 27.50;
const PrecioAbrigo = 275;
const PrecioChaleco = 380

if(ingresar){
    let ingreso = prompt("Seleccione el artículo para comprar: \n 1- Arnes ($300) \n 2- Correa ($100) \n 3-Collar ($27.50) \n 4-Abrigo ($275) \n 5-Chaleco($380) \n 6-Cancelar")
    while ((ingreso!="1")&&(ingreso!="2")&&(ingreso!="3")&&(ingreso!="4")&&(ingreso!="5")&&(ingreso!="6")){
        ingreso = prompt("Opción no válida. \n Seleccione el artículo para comprar: \n 1- Arnes ($300) \n 2- Correa ($100) \n 3-Collar ($27.50) \n 4-Abrigo ($275) \n 5-Chaleco($380)")
    }
    
    if (ingreso!="6") {
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    }

    let confirmar;
    let total;
    switch (ingreso) {
        case "1":
            total = cantidad * 300;
            confirmar = prompt("Seleccionaste "+ cantidad + " de Arnes. El total es: " + total + " ¿Estás seguro? Ingrese 'S' para confirmar")
            break;
        case "2":
            total = cantidad * 100;
            confirmar = prompt("Seleccionaste "+ cantidad + " Correa. El total es: " + total + " ¿Estás seguro? Ingrese 'S' para confirmar")
            break;
        case "3":
            total = cantidad * 27.50;
            confirmar = prompt("Seleccionaste "+ cantidad + " Collar. El total es: " + total + " ¿Estás seguro? Ingrese 'S' para confirmar")
            break;
        case "4":
            total = cantidad * 275;
            confirmar = prompt("Seleccionaste "+ cantidad + " Abrigo. El total es: " + total + " ¿Estás seguro? Ingrese 'S' para confirmar")
            break;
        case "5":
            total = cantidad * 380;
            confirmar = prompt("Seleccionaste "+ cantidad + " Chaleco. El total es: " + total + " ¿Estás seguro?. Ingrese 'S' para confirmar")
            break;
        case "6":
            break;
    } 

    if ((confirmar=="s")||(confirmar=="S")){
        alert("Gracias por tu Compra")
    } else { 
        alert("Compra cancelada");
    }
    

}   else {
        alert("Usuario Incorrecto") 
    }
*/

function Productos(nombre,tipoproducto,precio) {
    this.nombre = nombre
    this.tipoproducto = tipoproducto
    this.precio = precio
}


const listaProductos = [
    { nombre : "front range",
      tipoproducto : "arnes",
      precio : parseFloat("75000"),
      cantidad : parseInt("20")},

    { nombre : "web master",
      tipoproducto : "arnes",
      precio : parseFloat("150000"),
      cantidad : parseInt("15")}, 

    { nombre : "switchbak",
      tipoproducto : "arnes",
      precio : parseFloat("210000"),
      cantidad : parseInt("10")},   
      
    { nombre : "confluence",
      tipoproducto : "collar",
      precio : parseFloat("15000"),
      cantidad : parseInt("30")},   

    { nombre : "top rope",
      tipoproducto : "collar",
      precio : parseFloat("20000"),
      cantidad : parseInt("9")},   

    { nombre : "crag",
      tipoproducto : "collar",
      precio : parseFloat("10000"),
      cantidad : parseInt("17")},   

    { nombre : "overcoat",
      tipoproducto : "abrigo",
      precio : parseFloat("70000"),
      cantidad : parseInt("7")},   

    { nombre : "climate changer",
      tipoproducto : "abrigo",
      precio : parseFloat("100000"),
      cantidad : parseInt("4")},   

    { nombre : "float coat",
      tipoproducto : "chaleco",
      precio : parseFloat("150000"),
      cantidad : parseInt("15")},   

    { nombre : "crag",
      tipoproducto : "correa",
      precio : parseFloat("150000"),
      cantidad : parseInt("15")},  

    { nombre : "front range",
      tipoproducto : "correa",
      precio : parseFloat("150000"),
      cantidad : parseInt("15")},   

    { nombre : "roamer",
      tipoproducto : "correa",
      precio : parseFloat("150000"),
      cantidad : parseInt("15")},   
]

const arneses = listaProductos.filter((el)=>{return el.tipoproducto==="arnes" && el.cantidad > 0});
const collares = listaProductos.filter((el)=>{return el.tipoproducto==="collar" && el.cantidad > 0});
const chalecos = listaProductos.filter((el)=>{return el.tipoproducto==="chaleco" && el.cantidad > 0});
const correas = listaProductos.filter((el)=>{return el.tipoproducto==="correa" && el.cantidad > 0});
const abrigos = listaProductos.filter((el)=>{return el.tipoproducto==="abrigo" && el.cantidad > 0})

function listarStock(arr) {
    let nombres = ""
    let cont = parseInt('1')
    arr.forEach(el => {
        contstring = cont.toString()
        nombres = nombres + contstring + ": " + el.nombre + "\n";
        cont +=1;
    });
    return nombres
}

function pedirProducto() {
    let nombreproductos;
    let stock;
    let nombreselec;
    let tipoProducto = prompt("Ingrese el tipo de producto que desea comprar: \n 1- Arnes \n 2- Correa \n 3-Collar \n 4-Abrigo \n 5-Chaleco \n 6-Cancelar")
    console.log(tipoProducto);
    switch (tipoProducto){
        case "1":
        stock = listarStock(arneses)
        tipoProducto = "arnes"
        nombreproductos = prompt("Los arneses que hay en stock son: \n" + stock);
        nombreselec = arneses[nombreproductos-1].nombre
        break;
        
        case "2":
        stock = listarStock(correas)
        tipoProducto = "correa"
        nombreproductos = prompt("Las correas que hay en stock son: \n" + stock);
        nombreselec = correas[nombreproductos-1].nombre
        break;

        case "3":
        stock = listarStock(collares)
        tipoProducto = "collar"
        nombreproductos = prompt("Los collares que hay en stock son: \n" + stock);
        nombreselec = collares[nombreproductos-1].nombre
        break;

        case "4":
        stock = listarStock(abrigos)
        tipoProducto = "abrigo"
        nombreproductos = prompt("Los abrigos que hay en stock son: \n" + stock);
        nombreselec = abrigos[nombreproductos-1].nombre
        break;
        
        case "5":
        stock = listarStock(chalecos)
        tipoProducto = "chaleco"
        nombreproductos = prompt("Los chalecos que hay en stock son: \n" + stock);
        nombreselec = chalecos[nombreproductos-1].nombre
        break;
        
        case "6":
        break;

        default:
            alert('opcion invalida')
    }
    console.log(nombreselec);
    console.log(tipoProducto);
    const prodseleccionado = listaProductos.find((el) => (el.nombre===nombreselec && el.tipoproducto === tipoProducto));
    console.log(prodseleccionado);
    return prodseleccionado
}

const productoselect = pedirProducto()
console.log(productoselect);
const pedidoProductos = new Productos(productoselect.nombre,productoselect.tipoProducto,productoselect.precio)
console.log(pedidoProductos);
