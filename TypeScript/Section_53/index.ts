// 1 - Arrays

let numbers:number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

const names: string[] = ["João", "Guilherme"]

// 2 - Outra sintaxe de array
const nums: Array<number> = [123,49,89,21]

nums.push(1597)

console.log(nums)

console.log(nums[5])


// 3 - Any
let multi: any = [1,2,'test', true]

console.log(multi)

multi.push([1,5,'test2'])

console.log(multi)

// 4 - Parâmetros tipados
function soma(a: number, b:number) {
    console.log(a+b)
}
soma(4,5)

// 5 - Retorno tipado
function greeting(name: string): string {
    // return 5
    return `Olá ${name}`
}

console.log(greeting("João"))
// console.log(greeting(123))


// 6 - Função anônima
setTimeout(function() {
    const salary: number = 1000
    // console.log(parseFloat(salary))
    // console.log(salary)
},2000)


// 7 - Tipos de objetos
function passCoordinates(coord: {x: number, y:number}) {
    console.log("X coordinates:" + coord.x)
    console.log("Y coordinates:" + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

const pessoaObj: {nome: string, surname: string} = {nome: "João", surname: "Melão"}


// 8 - Props opcionais
// O primeiro argumento nunca pode ser opcional. Não pode haver um parametro opcional antes de um parametro obrigatório
function showNumbers(a: number, b:number, c:number) {
    console.log("A " + a)
    console.log("B " + b)
    console.log("C " + c)
} 

showNumbers(1,2,3)

function showNum(a: number, b:number, c?:number) {
    console.log("A " + a)
    console.log("B " + b)
    console.log("C " + c)
} 

showNum(5,6)
showNum(8,3,1)


// 9 - Validando argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("João", "Melão"))
console.log(advancedGreeting("João"))


// 10 - Union Type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1,'teste', false]


// 11 - Avançando em Union Type
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado"
    }
    return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))


// 12 - Type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("5")


// 13 - Interfaces
interface Point {
    x:number
    y:number
    z:number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x:10,
    y:10,
    z:20
}

showCoords(coordObj)


// 14 - Interface x Type Alias
interface Person {
    name:string
}
interface Person {
    age:number
}

const somePerson: Person = {name: "João", age: 50}
console.log(somePerson)

type personType = {
    name: string
}

/*
type personType = {
    age: number
}

Com Type alias não é possível agregar objetos.
*/


// 15 - Literal Types
let test: "testando"

test = "testando"

// test só pode receber o valor de "testando"

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

/*
showDirection("top")
Não irá funcionar, pois só pode receber os 3 valores já pré definidos.
*/


// 16 - Non-null Assertion Operator
const p = document.getElementById("some-p")

console.log(p!.innerText)
// Caso não coloque a ! ou ?, o TS não permite a compilação


// 17 - Bigint
// usado para valores numéricos muito altos, porém precisa mudar a conf do TS para versão ES2020

let n: bigint

// n = 1    Neste caso se enquadraria em number, portanto ele não aceita o valor

// Para alterar a versão do TS, ir para tsconfig.json, achar target e mudar para es2020 (padrão es2016)
n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)


// 18 - Symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

