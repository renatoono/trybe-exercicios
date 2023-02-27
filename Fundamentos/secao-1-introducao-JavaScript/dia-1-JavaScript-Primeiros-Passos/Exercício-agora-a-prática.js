let a = 10
let b = 20

if (a > b) {
    console.log('a maior');
} 

else if (b > a) {
    console.log('b maior');
}

// =============================================================

const num1 = 10
const num2 = 20
const num3 = 30

if (num1 > num2 && num1 > num3 ) {
    console.log(num1 + ' maior de todos');
}

else if (num2 > num1 && num2 > num3 ) {
    console.log(num2 + ' maior de todos');
}

else {
    console.log(num3 + ' maior que todos');
}

// ===============================================================

const numero = 1

if (numero > 0) {
    console.log('positivo');
}

else if (numero < 0) {
    console.log('negativo');
}

else if (numero = 0){
    console.log('zero');
}

// ===================================================================

let a = 60
let b = 60
let c = 60
let soma = a + b + c

 if ( a < 0 || b < 0 || c < 0) {
    console.log('Error');
 }

 else if (soma == 180) {
    console.log(true);
 }

 else {
    console.log(false);
 }






