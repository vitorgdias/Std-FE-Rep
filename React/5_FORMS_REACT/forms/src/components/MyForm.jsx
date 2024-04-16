/* eslint-disable react/prop-types */
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({userName,userEmail }) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const handleName = (e) => {
        setName(e.target.value)
    }
    const [bio, setBio] = useState("")

    const [role, setRole] = useState()

    // 5 - Envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email,bio,role)
        
        // 7 - Limpar formulário
        setEmail("")
        setName("")
        setBio("")
        setRole("")
    }

    

  return (
    <div>
        {/* 1 - Criação de formulário */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName}
                // 6 - Controlled input
                value={name || ""}
                />
            </div>
            {/* 2 - Label envolvendo o input */}
            <label>
                <span>Email:</span>
                <input type="text" name="email" placeholder='Digite seu e-mail' 
                // 4 - Simplificando manipulação
                onChange={(e) => setEmail(e.target.value)} 
                // 6 - Controlled input
                value={email || ""}/>
            </label>
            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm