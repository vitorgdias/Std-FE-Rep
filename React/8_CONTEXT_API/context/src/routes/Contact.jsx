// 3- Alterando valor do context
// Comentado para a refatoração (4)
// import { useContext } from "react"
// import {CounterContext} from '../context/CounterContext'

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Contexto mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {
  const {counter} = useCounterContext()

  const {color} = useTitleColorContext()

  return (
    <div>
        <h1 style={{color: color}}>Página de Contato</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Contact