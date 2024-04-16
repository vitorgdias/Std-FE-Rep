import './App.css'
// 2 - Imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - Renderização de lista
import ListRender from './components/ListRender'

// 7 - Render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - Props
import ShowUserName from './components/ShowUserName'

// 9 - Desentruturando props
import CarDetails from './components/CarDetails'

// 11 - Rederização de lista com componentes
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km:0},
  {id: 2, brand: "Kia", color: "Branco", km:200000},
  {id: 3, brand: "Renault", color: "Azul", km:32000},
]

// 12 - Fragments
import Fragment from './components/Fragment'

// 13 - Children
import Container from './components/Container'

// 14 - função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - State lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  // 14 - função em prop
  function showMessage() {
    console.log("Evento o componente pai")
  }

  // 15 - State lift
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App' style={{ paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem no public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - Render de lista */}
      <ListRender />
      {/* 7 - Render condicional */}
      <ConditionalRender />
      {/* 8 - Props */}
      <ShowUserName name="Vitor"/>
      {/* 9 - Desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho"/>
      {/* 10 - Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={15644} color="Branco"/>
      <CarDetails km={89444} color="Azul" brand="Audi" />
      {/* 11 - Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
      {/* 12 - Fragment */}
      <Fragment />
      {/* 13 - Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu componente</p>
        </div>
      </Container>
      {/* 14 - Função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - State lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  )
}

export default App
