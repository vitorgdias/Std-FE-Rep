// 3- Alterando valor do context
// Comentado para a refatoração (4)
// import { useContext } from "react"
// import {CounterContext} from '../context/CounterContext'
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Contexto mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do counter: {counter}</p>
        <ChangeCounter/>

        {/* 6 - Alterando o contexto compexo */}
        

        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home