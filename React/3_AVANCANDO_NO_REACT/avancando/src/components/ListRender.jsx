import { useState } from "react"

const ListRender = () => { 
    const [list] = useState(["Vitor", "João", "Guilherme"])
    const [users, setUsers] = useState([
        {id:1, name: "Vitor", age: 30},
        {id:2, name: "João", age: 26},
        {id:3, name: "Guilherme", age: 28},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return <div>
    {/* 4 - Render sem key */}
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
        {/* Podemos usar o indice como chave única, mas não é aconselhável, definindo (item, i) e a key={i} */}
    </ul>
    {/* 5 - Render com key */}
    <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age} anos</li>
        ))}
    </ul>
    {/* 6 - previous state */}
    <button onClick={deleteRandom}>Delete random user</button>
  </div>
    
  
}

export default ListRender