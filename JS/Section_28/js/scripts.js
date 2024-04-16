// 1 - var, let e const

var x = 10
var y = 15

if(y>10) {
    var x = 5
    console.log(x)
}
// O x em escopo global é alterado
console.log(x)

let a = 10
let b = 15

if(b>10) {
    let a = 5
    console.log(a)
}
// Neste caso a variável dentro do bloco é alterada, mas a global não é alterada
console.log(a)

// Isso funciona para todos os blocos, respeitando as variáveis com let e const

// 2 - Arrow function - Cria funções mais simples
const sum = function(a,b) {
    return a+b
}

// Mesma função de cima, porém mais simplificada
const arrowSum = (a,b) => a+b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name) {
        return `Hello, ${name}`
    } else {
        return "Hello"
    }
}

console.log(greeting('Vitor'))
console.log(greeting())

const user = {
    name: "João",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        },1000)
    },

    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }
}

user.sayUserName()
user.sayUserNameArrow()

// 3 - Filter

const arr = [1,2,3,4,5,6]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Vitor", available: true},
    {name: "João", available: false},
    {name: "Fernanda", available: true},
    {name: "Guilherme", available: true},
    {name: "Gertruzo", available: false},
]

const availableUsers = user.filter((user) => user.available)

// 4 - Map

const products = [
    {name: "Camisa", price: 10.99, category: "Roupa"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 459.9, category: "Eletro"},
    {name: "Calça", price: 10.99, category: "Roupa"},
]

products.map((product) => {
    if(product.category === "Roupa") {
        product.onSale = true
    }
})
// Modifica apenas os produtos que se aplicam na categoria Roupa
console.log(products)

// 5 - Template Literals
const userName = "Vitor"
const age = 30

console.log(`O nome é usuário é ${userName} e ele tem ${age} anos`)

// 6 - Destructing
const fruits = ['Maça', 'Mamão', 'Banana']

const [ f1, f2, f3] = fruits

console.log(f1,f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    colo: "Cinza"
}

const { name: productName, price, category, color } = productDetails

console.log(`O nome do produtos é ${productName}, ele custa R$${price} e é da cor ${color}`)

// 7 - Spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a3,7]

console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 1000000, price: 49999}

const car= {...carName, ...carBrand, ...otherInfos}

console.log(car)

// 8 - Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount)/100)
    }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt)

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))

// 9 - Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: "),
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Amarelo", "Verde"])

console.log(hat)
console.log(hat.name)

hat.showColors()