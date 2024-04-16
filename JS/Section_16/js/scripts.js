// Variárias
let nome = "Vitor";

console.log(nome);

nome = "Vitorgd"

// Let pode ser alterado ao longo do código

console.log(nome)

const idade = 30;

console.log(idade);

// idade = 30; - Não podemos mudar o valor de const (constante), gera um erro no console.

console.log(typeof nome, typeof idade)

// Mais sobre variáveis
// Não podem começar com número ou @
// let 2test = 'inválido'
// let @test = 'inválido'

let a = 10, 
    b=20, 
    c=30; 

console.log(a,b,c)

// Case sensitive

const nomecompleto = "Vitor G";

const nomeCompleto = "É o C maiusculo";

// Podemos usar _ e $ para criar variáveis

let _test = 'ok';

let $test = 'ok';

console.log(_test, $test);

// Prompt
// const age = prompt("Digite a sua idade: ");

// console.log(`Você tem ${age} anos.`);

// Alert
// alert('Testando');

// Math
console.log(Math.max(5,2,3,6,4,89)) // Encontra o valor máximo

console.log(Math.floor(4.89)) // Arredonda para baixo

console.log(Math.ceil(4.89)) // Arredonda para cima

// Console
console.log('teste!')

console.error('error!')

console.warn('aviso!')

// If
const m = 10

if(m > 5) {
    console.log("M é maior que 5")
}

const user = "João"

if(user === "João") {
    console.log("O nome é João")
}

// Else
const loggedIn = false
if(loggedIn) {
    console.log("Está autenticado")
} else {
    console.log("Não está autenticado")
}

// Else if
if (1 > 2) {
    console.log('teste');
} else if (2 > 3) {
    console.log('teste 2');
} else if (5 > 1) {
    console.log("Agora sim")
}

const userName = "Vitor"
const userAge = 30

if(userName === "João") {
    console.log(`Bem vindo ${userName}`)
} else if(userName === "Vitor" && userAge === 30) {
    console.log(`Olá ${userName}, você tem ${userAge} anos`)
} else {
    console.log("Nenhuma condição aceita!")
}

// While
let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1 
}

// Do while
let o =10

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1)

// For
for (let t=0; t<10; t++) {
    console.log(`Repetindo algo...`)
}

// Break - Mais utilizado
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if (g === 12) {
        console.log("O g é 12!");
        break
    }
}

// Continue - Menos utilizado
for (let s = 0; s < 10; s = s+1) {
    // Operador de resto = %
    if (s % 2 === 0) {
        console.log("Número par");
        continue
    }
    console.log(s)
}

// Switch
const job = "Advogado"

switch(job) {
    case "Programador":
        console.log("Você é um programador")
        break
    case "Advogado":
        console.log("Você é um advogado")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break
    default:
        console.log("profissão não encontrada")
}
