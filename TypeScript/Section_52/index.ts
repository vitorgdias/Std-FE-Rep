// 1 - Numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 15.8799

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

//console.log(y.toUpperCase()) 
// a própria IDE não dá a sugestão, pois number não possui a função uppercase. A compilação para JS não é possível se houver erros detectados pela IDE


// 2 - Strings
const firstName: string = "Vitor"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Dias"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)


// 3 - Booleans
let a:boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)


// 4 - Inference e annotation
const ann:string = "Teste"

let inf = "teste 2"

// inf = 1 
// A IDE já identifica que inf é string, conforme definido anteriorment, por isso o TS não deixa prosseguir com a compilação para JS.


// 5 - Config do TS
/* 
Gerar um arquivo de config no terminal com  tsc --init 

Ao executar o comando, um arquivo json é criado com as opções default. 
*/

// 6 - Compilação automática do TS

/* 
Para dar um hot reaload, podemos usar o tsc -w
Toda vez que salvar o projeto, será feita a compilação.
*/

console.log("Testando compilação automática")