// 1 - strict
"use strict";

opa = "teste" // Gera um erro, pois não é uma variável definida

// O correto seria
const opa = "teste"

// Não podemos usar variáveis do proprio JS, como undefined
const undefined = 10

// Nâo podemos deletar uma propriedade de um array
delete [].length

// 2 - console.log - Muito utilizado como debug
let a = 1
let b = 2

if(a == 1) {
    a = b + 2
}

console.log(a)

for(let i=0; i<b;i++) {
    a = a + 2
    console.log(a)
}

if(a > 5) {
    a = 25
}
console.log(a)

// 3 - Debugger
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}

debugger

for(let i = 0; i < d; i++) {
    c = c + 2
}

console.log('Executou o loop')

debugger

if(c > 5) {
    c = 25
}

// 4 - Tratamento de dados por função - Mais usado para User do que para Devs
function checkNumber(n) {
    const result = Number(n)
    if(Number.isNaN(result)) {
        console.log('Valor incorreto!')
        return
    }
    console.log('Valor correto!')
    return result
}

checkNumber(5)
checkNumber('10')
checkNumber({})
checkNumber('teste')

// 5 - Exceptions
let x = 10

if(x != 11) {
    throw new Error('O valor de x não pode ser diferente de 11!')
}

// 6 - Try catch - Mais usado para User do que para Devs
try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`)
}

// 6 - Finally - Vai até o final do código, mesmo que um erro tenha sido gerado num try catch.
try {
    const value = checkNumber('asd')
    if(!value) {
        throw new Error('Valores inválidos')
    }
} catch(error) {
    console.log(`Opa, aconteceu um problemas: ${error}`)
} finally {
    console.log('O código foi executado!')
}

// 7 - Assertions - Algo para Devs não para Users
function checkArray(arr) {
    if(arr.length === 0){
        throw new Error('O array precisa ter elementos')
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([]) // Irá gerar um erro.

checkArray([1,2,3]) // Código segue normalmente