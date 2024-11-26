
//1. algoritmo generaliza la suma de dos valores que ingrese el usuario
function suma(){
    // declaracion variables
    let a;
    let b;
    let s;

    // solicito los valores
    a = parseInt(prompt("ingrese el primer valor"))
    b = parseInt(prompt("ingrese el segundo valor"))
    s = a + b
    console.log("el resultado es: "+ s)
    alert("el resultado es: "+ s)
}
// algoritmo que determina la suma la resta, multiplicacion y division entre dos valores ingresados por el usuario
function op_mate() {
    let a;
    let b
    let s
    let r
    let m
    let d
    a = parseInt(prompt("ingrese el primer valor"))
    b = parseInt(prompt("ingrese el segundo valor"))
    s = a + b
    r = a - b
    m = a * b
    d = a / b
    console.log("el resultado es: "+ s+" la resta es: "+r+" la multiplicacion es: "+m+" la division es: ")
    alert("el resultado es: "+ s+ " la resta es: "+r+" la multiplicacion es: "+m+" la division es: "+d)

    
}
function op_cua(){
    let a;
    a = parseInt(prompt("ingrese el numero para potenciar"))
    b = a *a 
    
    console.log("el resultado es: "+b)
    alert("el resultado es: "+ b)

    
}
function a_t(){
    let a;
    a = parseInt(prompt("ingrese la base"))
    b = parseInt(prompt("ingrese la altura"))
    
    console.log("el resultado es: "+b)
    alert("el resultado es: "+ b)

    
}