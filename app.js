
const nota1 = document.getElementById("note1");
const nota2 = document.getElementById("note2");
const resultado = document.getElementById("Resultado");
const btnMateria = document.getElementById("Gano");
const btnCuadro = document.getElementById("Honor");
const btnRecuperar = document.getElementById("Recupera");
const Mybody = document.getElementById("MyBody");
const color = document.getElementById("color");

color.addEventListener("change", cambioColor);
btnCuadro.addEventListener("click", Cuadro);
btnMateria.addEventListener("click", Gano);
btnRecuperar.addEventListener("click", Recuperar);
btnMateria.addEventListener("click", Null);
btnCuadro.addEventListener("click", Null);
btnRecuperar.addEventListener("click", Null);


function cambioColor() {
    Mybody.style.backgroundColor = color.value;
}


function Null() {
    if (nota1.value === '') {
        resultado.textContent = "Campo 1 Vacío, Ingresa un valor.";
    } else if (nota2.value === '') {
        resultado.textContent = "Campo 2 Vacío, Ingresa un valor.";
    }
    if (nota1.value === '' && nota2.value === '') {
        resultado.textContent = "Campos Vacíos Ingresa un valor."
    }
}


function Gano() {
    let valor = Number(nota1.value);
    let valor2 = Number(nota2.value);
    let num1 = nota1.value * 0.30;
    let num2 = nota2.value * 0.30;
    let Suma = num1 + num2;
    let Resta = 3.5 - Suma;
    let Division = Resta / 0.40;
    let Total = Division.toFixed(1);

    resultado.textContent = "Tienes que sacar: " + Total + ", para ganar la materia.";

    if (valor < 1 && valor2 < 1) {
        resultado.textContent = "Números menores a 1 Invalidos.";
    } else if (valor > 5 && valor2 > 5) {
        resultado.textContent = "Números mayores a 5 Invalidos.";
    } else if (valor <= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 <= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor >= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 >= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor < 1 && valor2 > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5."
    } else if (valor2 < 1 && valor > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5."
    } else if (Total > 5) {
        resultado.textContent = "No tienes oportunidad de ganar, tú nota: " + Total;
    } else if (Total >= 3.5 && Total <= 3.9) {
        resultado.textContent = "Felicidades, has ganado la materia, tú nota es: " + Total;
    } else if (Total <= 3.0) {
        resultado.textContent = "Tú nota es: " + Total;
    }
}



function Cuadro() {
    let valor = Number(nota1.value);
    let valor2 = Number(nota2.value);
    let num1 = nota1.value * 0.30;
    let num2 = nota2.value * 0.30;
    let Suma = num1 + num2;
    let Resta = 4.0 - Suma;
    let Division = Resta / 0.40;
    let Total = Division.toFixed(1);

    resultado.textContent = "Usted debe sacar: " + Total + ", para estar en el cuadro de honor.";

    if (valor < 1 && valor2 < 1) {
        resultado.textContent = "Numeros menores a 1 Invalidos.";
    } else if (valor > 5 && valor2 > 5) {
        resultado.textContent = "Numeros mayores a 5 Invalidos.";
    } else if (valor <= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 <= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor >= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 >= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor < 1 && valor2 > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 < 1 && valor > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (Total > 5.0) {
        resultado.textContent = "No estas en el cuadro de honor, tú nota es: " + Total;
    } else if (Total >= 4.0 && Total <= 5.0) {
        resultado.textContent = "Felicidades estas en el cuadro de honor tú nota es: " + Total;
    }
}


function Recuperar() {

    let valor = Number(nota1.value);
    let valor2 = Number(nota2.value);
    let num1 = nota1.value * 0.30;
    let num2 = nota2.value * 0.30;
    let Suma = num1 + num2;
    let Resta = 2.0 - Suma;
    let Division = Resta / 0.40;
    let Total = Division.toFixed(1);

    resultado.textContent = "Usted debe sacar: " + Total + ", para poder recuperar."


    if (valor < 1 && valor2 < 1) {
        resultado.textContent = "Números menores a 1 Inválidos.";
    } else if (valor > 5 && valor2 > 5) {
        resultado.textContent = "Números mayores a 5 Inválidos.";
    } else if (valor <= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 <= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor >= 1 && valor2 > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor2 >= 1 && valor > 5) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (valor < 1 && valor2 > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5."
    } else if (valor2 < 1 && valor > 1) {
        resultado.textContent = "Error, las notas van de 1 a 5.";
    } else if (Total <0) {
        resultado.textContent = "Ya se encuentra en el rango.";
    } else if (Total >= 2 && Total <= 3.4) {
        resultado.textContent = "Usted debe sacar: " + Total + ", para poder recuperar.";
    }
}


