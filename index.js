//var numero, numero1;
//numero=prompt("Ingresar un numero: ");
//numero1=prompt("Ingresar otro numero: ");
//prompt.numero
//prompt.numero1
//var suma=  numero + numero1;
//console.log("La suma es: "+suma)
//
//let primer = 10;
//while(primer > 9) {
//    console.log(primer);
//    primer = primer + 1;
//}
/*console.log("");
console.log("Hola Mundo");
console.log("")
var variable=34;
console.log("Mi edad es: " + variable);*/

let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}
const show = (n) => {
    display.value += n;
}
const calc = () => {
    display.value = eval(display.value);
}