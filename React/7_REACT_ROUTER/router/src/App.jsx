import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - Link entre páginas
import Navbar from './components/Navbar'

// 9 - SearchForm
import SearchForm from "./components/SearchForm"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
