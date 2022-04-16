let Nombre = prompt("Ingrese su nombre");

for (i = 0; i = 10; i++){
    let Color = prompt("Ingrese un color primario")
    if (Color == "rojo"){
        for (i = 0; i <= 10; i++){
        alert(Nombre + " " + "Ingresasate el color Rojo");
        alert("Para salir del bucle ingrese el numero 1234");
        let ClaveRojo = prompt("Ingrese la clave dispuesta anteriormente");
        if (ClaveRojo == "1234"){
            alert(Nombre+ " " + "Felicidades, haz roto el Bucle");
            break;
        }
        if (ClaveRojo != "1234"){
            alert("No ingresaste una clave valida");
        }
    }
        break;
    }else if (Color == "azul"){
        for (i = 0; i <= 10; i++){
            alert(Nombre + " " + "Ingresaste el color Azul");
            alert("Para salir del bucle ingrese el numero 159");
            let ClaveAzul = prompt("Ingrese la clave dispuesta anteriormente");
            if (ClaveAzul == "159"){
                alert(Nombre+ " " + "Felicidades, haz roto el Bucle");
                break;
            }
            if (ClaveAzul != "159"){
                alert("No ingresaste una clave valida");
            }
        }
        break;
    }else if (Color == "amarillo"){
        for (i = 0; i <= 10; i++){
            alert(Nombre + " " + "Ingresaste el color Amarillo");
            alert("Para salir del bucle ingrese el numero 753");
            let ClaveAmarillo = prompt("Ingrese la clave dispuesta anteriormente");
            if (ClaveAmarillo == "753"){
                alert(Nombre+ " " + "Felicidades, haz roto el Bucle");
                break;
            }
            if (ClaveAmarillo != "753"){
                alert("No ingresaste una clave valida");
            }
        }
        break;
    }else if (Color != "Azul" && "Rojo" && "Amarillo"){
        alert("No haz introducido un color valido");
    }
}
