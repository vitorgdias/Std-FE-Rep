import {useLayoutEffect, useEffect, useState} from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Um Nome 0")

    useEffect(() => {
        console.log("2")
        setName("Nome Mudou 2")
    }, [])

    useEffect(() => {
        console.log("3")
        setName("Nome Mudou 3")
    }, [])

    useLayoutEffect(() => {
        console.log('1')
        setName("Outro Nome 1")
    },[])

    console.log(name)

  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect