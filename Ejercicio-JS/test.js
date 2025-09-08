let j=7
let i=7
let h= i + j
let resultado;

i===j ? resultado = "son iguales" : "no son iguales";



const jugador = (deporte) => {
switch(deporte){
    case "Futbol":
    resultado="Messi"
    break;
    case "Tenis":
    resultado="Alzaraz"
    break;
    default:
    resultado="no hay jugador"
    break;
}
return resultado;
}
resultado= jugador("Futbol");


let suma = (i,j)=>{
    return i + j;
};