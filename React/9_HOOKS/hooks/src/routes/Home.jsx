import HookUseState from "../components/HookUseState"
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from "../components/HookUseEffect"

import { useContext } from "react"
import { someContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"
import HookCustom from "../components/HookCustom"

const Home = () => {
  const {contextValue} = useContext(someContext)


  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
      <hr />
    </div>
  )
}

export default Home