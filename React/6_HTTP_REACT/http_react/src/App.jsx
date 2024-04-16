import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  // 1 - resgatando dados
  // const [products, setProducts] = useState([])

  // 4 - Custom Hooks

  const { data: items, httpConfig, loading, error}  = useFetch(url)

  // Comentado para usar acima o custom hook
  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }

  //   getData()
  // }, [])

  // 2 - Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }

    
    // 5 - refatorando o post
    httpConfig(product, "POST")


    // Comentado para a refatoração do post
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // })
    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }

  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}
      {/* 7 - Tratando erro */}
      {error && <p>{error}</p>}
      {/* 1 - Resgate de dados */}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>
      {/* 2 - enviando dados */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* <input type="submit" value="Enviar"/> */}
          {/* 7 - loading post */}
          {loading && <input type="submit" disabled value="Aguade"/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  )
}

export default App
