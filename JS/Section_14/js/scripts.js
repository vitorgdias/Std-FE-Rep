console.log("Testando JS 2")

// 1 - Number
console.log(2);
console.log(typeof 2);
console.log(2);
console.log(typeof 5.1);
console.log(-86);
console.log(typeof -86);

// 2 - Operações Aritiméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(4 * 5);
console.log(10 / 2);
console.log(5 + (4 * 2));

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "a");
// Not a Number (NaN)
console.log(typeof NaN); 


// 4 - Strings
console.log("Text")
console.log(typeof "Text")
console.log('Other Text')
console.log(typeof 'Other Text')
console.log(`Another one`)
console.log(typeof `Another one`)

// Special Symbols
console.log("Testando quebra \n de linha")
console.log("Espaçamento de \t tab")

// Concatenação
console.log("Oi," + "tudo" + "bem?");
console.log(`Testando` + `com` + `crase`)

// Template strings (só funciona entre crase)
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// Boolean
console.log(true);

console.log(false);

console.log(5>8);

console.log(8<50);

// Comparações
console.log (5 <= 5);

console.log(10 == 9);

// Idêntico
console.log(9 == "9");

console.log( 9 === "9");

console.log(9 != "9");
console.log(9 !== "9");

// Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Vitor" === 1);
console.log(5 > 2 || "Vitor" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);

// Empty values
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(undefined == false);

// Mudança de tipos
console.log(5 * null);
console.log('teste' * 'outro');
console.log('10' + 1);
console.log('10' - 1);