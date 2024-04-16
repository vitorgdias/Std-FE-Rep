// 1 - setTimeout
console.log('Ainda não executou')

setTimeout(function(){
    console.log('Requisição Assíncrona')
}, 2000)

console.log('Ainda não executou 2')

// 2 - setInterval - Executada de tempos em tempos
console.log('Ainda não começou')

setInterval(function() {
    console.log('Intervalo assíncrono')
}, 3000)

console.log('Ainda não começou 2')

// 3 - Promises
const promessa = Promise.resolve(5 + 5)

console.log('Algum código')

promessa
    .then((value) => {
    console.log(`A soma é ${value}`)
    return value
    })
    .then((value) => value -1)
    .then((value) => console.log(`Agora é ${value}`))

console.log('Outro Código')

// 4 - Falha na promise - tratando um erro
Promise.resolve(4 * 'asd')
    .then((n) => {
        if(Number.isNaN(n)){
            throw new Error('Valores inválidos')
        }
    })
    .catch((err) => console.log(`Um erro ocoreu: ${err}`))

// 5 - Rejeitando uma Promise
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n>10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error('Número muito baixo'))
        }
    })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
)

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
)

// 6 - Resolvendo várias Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10+10)
const p3 = new Promise((resolve, reject) => {
    if(30>10) {
        resolve(30);
    } else {
        reject("Error")
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))

// 7 - Async functions
async function somarComDelay(a,b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log('Teste Async') // Irá aparecer primeiro que o resultado da soma, por ser assincrona

// 8 - Instrução await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve("Resolveu a Promise") 
        }, 2000);
    })
}

async function chamadaAsync() {
    console.log('Chamando a Promise, e esperando o resultado')
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

// 9 - Generators
function* generator() {
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)