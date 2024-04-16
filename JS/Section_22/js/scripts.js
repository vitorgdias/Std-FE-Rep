// 1 - Movendo-se pelo DOM
console.log(document.body)
console.log(document.body.childNodes) //Acessa a lista de nós do corpo
console.log(document.body.childNodes[1]) //Acessa o elemento 1 (header)
console.log(document.body.childNodes[1].childNodes) // Acessa a lista de nós do header
console.log(document.body.childNodes[1].childNodes[1]) // Acessa o elemento 1 do header (h1)
console.log(document.body.childNodes[1].childNodes[1].textContent) // Acessa o texto do elemento

// 2 - Seleção por Tag
//Não é muito utilizado, pois as Tags podem estar em todo o corpo do HTML, é uma chamada mais genérica e menos específica
const listItems = document.getElementsByTagName("li")

console.log(listItems)

// 3 - Seleção por Id - Seleção precisa do elemento, uma vez que cada elemento tem um Id diferente e ele não se repete no HTML
const title = document.getElementById('title')

console.log(title)

// 4 - Seleção por classe - Usual para classes
const products = document.getElementsByClassName('products')

console.log(products)

// 5 - Seleção de elementos por CSS - O mais utilizado atualmente no JS

//querySelectorAll seleciona todos os elementos
const productsQuery = document.querySelectorAll(".products")
console.log(productsQuery)

//querySelector
const mainContainer = document.querySelector('#main-container')
console.log(mainContainer)

// 6 - insertBefore
//Cria um elemento antes de outro, basta selecionar o elemento alvo conforme a sintaxe abaixo:
const p = document.createElement('p')
const header = title.parentElement
header.insertBefore(p, title)

// 7 - appendChild
const navLinks = document.querySelector('nav ul')
const li = document.createElement('li')
navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement('h2')
h2.textContent = 'Meu novo título!'

header.replaceChild(h2, title)

// 9 - createTextNode
const myText = document.createTextNode('Agora vamos colocar mais um título')
console.log(myText)

const h3 = document.createElement('h3')
h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)

// 10 - Trabalhando com Atributos
const firstLink = navLinks.querySelector('a')
console.log(firstLink)

firstLink.setAttribute('href', 'https://www.google.com') //Substituiu o # pelo link do google

console.log(firstLink.getAttribute('href')) //Pegar o texto do elemento
//Para abrir o link em outra aba
firstLink.setAttribute('target', '_blank') //Adicionou o atributo target no elemento

// 11 - Altura e largura dos elementos
const footer = document.querySelector('footer')
console.log(footer.offsetWidth) //Mostra a largura do elemento no console
console.log(footer.offsetHeight) //Mostra a altura do elemento no console

console.log(footer.clientWidth) //Mostra a largura do elemento no console sem considerar a borda
console.log(footer.clientHeight) //Mostra a altura do elemento no console sem considerar a borda

// 12 - Posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect()) //Mostra todas as posições do elemento no console

// 13 - CSS com JS
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14 - Alterando estilo de vários elementos
for(const li of listItems) {
    li.style.backgroundColor = 'red'
}