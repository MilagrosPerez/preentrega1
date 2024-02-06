let PinCorrecto = "123456";
let UsuarioCorrecto = "usuario";

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
    ingresar = login(usuario,pin)
    if(ingresar){
        break;
    }else {
        alert("Datos Incorrectos")
    }
};

let PrecioArnes = 300;
let PrecioCorrea = 100;
let PrecioCollar = 27.50;
let PrecioAbrigo = 275;
let PrecioChaleco = 380

if(ingresar){
    let ingreso = prompt("Seleccione el artículo para comprar: \n 1- Arnes ($300) \n 2- Correa ($100) \n 3-Collar ($27.50) \n 4-Abrigo ($275) \n 5-Chaleco($380) \n 6-Cancelar")
    while ((ingreso!="1")&&(ingreso!="2")&&(ingreso!="3")&&(ingreso!="4")&&(ingreso!="5")&&(ingreso!="6")){
        ingreso = prompt("Opción no válida. \n Seleccione el artículo para comprar: \n 1- Arnes ($300) \n 2- Correa ($100) \n 3-Collar ($27.50) \n 4-Abrigo ($275) \n 5-Chaleco($380)")
    }
    let cantidad;
    if (ingreso!="6") {
        cantidad = parseInt(prompt("Ingrese la cantidad"))
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

