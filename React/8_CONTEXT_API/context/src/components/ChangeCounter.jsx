// Comentado para usar o hook (4)
// import { useContext } from "react"
// import {CounterContext} from '../context/CounterContext'

// 4 - Usando o hook
import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCounter(counter+1)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter