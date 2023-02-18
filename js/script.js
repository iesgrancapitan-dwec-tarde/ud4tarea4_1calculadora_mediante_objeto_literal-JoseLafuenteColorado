const main = document.createElement("main");
main.className = "main";
document.body.appendChild(main);

const calculadora = document.createElement("section");
calculadora.className = "calculadora";
main.appendChild(calculadora);

const valores = [["CE", "<--", "%", "+"], [7, 8, 9, "-"], [4, 5, 6, "x"], [1, 2, 3, "/"], [0, "+-", ",", "="]]

let pantalla = document.createElement("input");
pantalla.setAttribute("type", "number");
pantalla.setAttribute("min", "0");
pantalla.setAttribute("disable", "true");
pantalla.value = 0;
calculadora.appendChild(pantalla);

valores.forEach((valor, indice) => {

    const fila = document.createElement("div");
    fila.className = `fila${indice}`;
    valor.forEach((valoresFila) => {
        const valor = document.createElement("button");
        valor.className = "valor";
        if (valor == "CE" || valor == "<--") {
            valor.className += "borrarValor";
        }
        valor.textContent = valoresFila;
        fila.appendChild(valor);
    });

    calculadora.appendChild(fila);

});

const funcionamiento = (function calcular() {
    
    let operador1;
    let operador2
    let operador3;
    let operacion;
    
    let mostrarValor = 0;
    const boton = document.querySelectorAll(`.valor`);
    boton.forEach((elemento) => {
        
        elemento.addEventListener("click", ()=> {
            
            switch (elemento.textContent) {
                case "CE":
                    mostrarValor = 0;
                    pantalla.value = mostrarValor;
                    break;
                case "<--":
                    if (pantalla.value.length == 1) {
                        mostrarValor = 0;
                        pantalla.value = mostrarValor;
                    } else {
                        mostrarValor = pantalla.value.slice(0, -1);
                        pantalla.value = mostrarValor;
                    }
                    break;
                case "=":
                    pantalla.value = eval(operador2 + operacion + operador1);
                    break;
                case "+":
                    operador2 = operador1;
                    operacion = "+";
                    operador1 = 0;
                    pantalla.value = 0;
                    break;
                case "-":
                    operador2 = operador1;
                    operacion = "-";
                    operador1 = 0;
                    pantalla.value = 0;
                    break;
                case "x":
                    operador2 = operador1;
                    operacion = "*";
                    operador1 = 0;
                    pantalla.value = 0;
                    break;
                case "/":
                    operador2 = operador1;
                    operacion = "/";
                    operador1 = 0;
                    pantalla.value = 0;
                    break;
                case "%": // TODO: Falta hacer el porcentaje correctamente
                    operador2 = operador1;
                    operacion = "%";
                    operador1 = 0;
                    pantalla.value = 0;
                    break;
                case "+-":
                    if (pantalla.value == 0) {

                    } else {
                        pantalla.value = -pantalla.value;
                    }
                    break;
                case ",":
                    pantalla.value += ",";
                    break;

                default:
                    if (pantalla.value == 0) {
                        mostrarValor = elemento.textContent;
                        operador1 = elemento.textContent;
                    } else {
                        mostrarValor += elemento.textContent;
                        operador1 += elemento.textContent;
                    }

                    pantalla.value = mostrarValor;
                    break;
            }


        });

    });



    
 
    

})();


