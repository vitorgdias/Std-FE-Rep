// 1 -Arrays
const lista = [1,2,3,4,5]

console.log(lista)

console.log(typeof lista)

const items = ['Vitor', 30, 9.16, true, []]

console.log(items)

// 2.1 - Mais sobre array
const arr = ['a','b','c','d','e']

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// 3 - Propriedades
const numbers = [56 , 6 , 8]

console.log(numbers.length)

console.log(numbers["length"])

const myName = "Vitor"

console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = 'Algum texto'

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase())

console.log(text.indexOf('g'))

// 5 - Objetos
const person = {
    name: "Vitor",
    age: 31,
    job: "QA"
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - Criando e Deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// 7 - Mais sobre objetos
const obj = {
    a: 'teste',
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c:[]
}

Object.assign(obj2,obj) // Copiando as propriedades do obj para obj2

console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

// 9 - Mutação
const a = {
    name:"Vitor",
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31
// Adicionar nos dois a propriedade
console.log(a)
console.log(b)

delete b.age
// Deleta nos dois a propriedade
console.log(a)
console.log(b)

// 10 - Loop em array
const users = ['Vitor', 'João', 'Guilherme', 'Fernanda']

for(let i=0; i<users.length;i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - Push e Pop (Adiciona / Remove itens do array na última posição)
const array = ["a","b","c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)

array.push("z",'x','y')

console.log(array)

// 12 - Unshift e Shift (Adiciona / Remove itens do array na primeira posição)

const letters = ["a","b","c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift('p','q','r')
letters.unshift('z')
console.log(letters)

// 13 - indexOf e lastIndexOf
const myElements = ['Morango', 'Maça', 'Abacate', 'Pera', 'Abacate']

console.log(myElements.indexOf('Maça'))
console.log(myElements.indexOf('Abacate'))

console.log(myElements[2])
console.log(myElements[myElements.indexOf('Abacate')])

console.log(myElements.lastIndexOf('Abacate'))

console.log(myElements.indexOf('Mamão'))
console.log(myElements.lastIndexOf('Mamão'))

// 14 - Slice

const testSlice = ['a','b','c','d','e','f']

const subArray = testSlice.slice[2,4]
// Mantém o array original intacto (retorna de 2 até 4 exclusive (não inclui o 4º elemento))
console.log(subArray)
console.log(testSlice)

// Para incluir o 4º elemento

const subArray2 = testSlice.slice[2,4+1]
console.log(subArray2)

// Com indices que não existem, retorna uma lista vazia
const subArray3 = testSlice.slice[10,20]
console.log(subArray3)

// Pegar um indice em diante, usa-se só o primeiro numero

const subArray4 = testSlice.slice[2]
console.log(subArray4)

// 15 - forEach
const nums = [1,2,3,4,5,6]

nums.forEach((numero) => {
    console.log(`O número é: ${numero}`)
})

const posts = [
    {title: 'Primeiro post', category: 'PHP'},
    {title: 'Segundo post', category: 'JS'},
    {title: 'Terceiro post', category: 'Python'},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})

// 16 - Includes
const brands = ['BMW', 'VW', 'Fiat']

console.log(brands.includes('Fiat'))
console.log(brands.includes('Kia'))

if (brands.includes('BMW')) {
    console.log('Há carros da marca BMW!')
}

// 17 - Reverse (inverte os elementos do array (altera o array principal))
const reverseTest = [1,2,3,4,5]

reverseTest.reverse()

console.log(reverseTest)

// 18 - Métodos de String - Trim (Tira espaços e quebras)
const trimTest = '    testando \n   '
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)

// 19 - Métodos de String - Padstart (Insere texto no começo da string, podendo colocar o número maximo de caracteres e o preenchimento)
const testPadStart = '1'
const newNumber = testPadStart.padStart(4, '0')

console.log(testPadStart)

console.log(newNumber)

const testPadEnd = newNumber.padEnd(10 , '0')
console.log(testPadEnd)

// 20 - Métodos de String - Split (separa a string em um array definindo um separador)
const frase = 'O rato roeu a roupa do rei de Roma'
const arrayDaFrase = frase.split(' ')
console.log(arrayDaFrase)

// 21 - Métodos de String - Join (junta um array em umaa string definindo um separador)
const fraseDeNovo = arrayDaFrase.join(' ')
console.log(fraseDeNovo)

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor']
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(', ')}.`
console.log(fraseDeCompra)

// 22 - Métodos de String - Repeat (repete uma string n vezes)
const palavra = 'Testando '
console.log(palavra.repeat())

// 23 - Rest operator
const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1,2,3))
console.log(somaInfinita(1,20,34,465,8789,22,448,745))

// 24 - For of - Não precisa de incrementador, pois é baseado no array utilizado
const somaInfinita2 = (...args) => {
    let total = 0
    for(num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(1,2,5,8))

// 25 - Destructuring em objetos
const userDetails = {
    firstName: 'Vitor',
    lastName: 'Galves',
    job: 'QA',
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)
// renomear as variáveis
const {firstName:primeiroNome} = userDetails
console.log(firstName)

// 26 - Destructuring em Arrays
const myList = ['Avião', 'Submarino', 'Carro']

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - Conhecendo Json
const myJson = 
    '{"name": "Vitor", "age": 31, "skills":["HTML","CSS","Python"]}'
console.log(myJson)
console.log(typeof myJson)

// 28 - Conversão de Json (Json > Objeto e Objeto > Json)
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)

// json invalido (nome sem aspas)
const badJson = '{"name": Vitor, "age": 31}'
const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
console.log(typeof myNewJson)