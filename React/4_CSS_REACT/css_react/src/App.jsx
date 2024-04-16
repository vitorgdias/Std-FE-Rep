import './App.css'

// 2 - CSS de componente
import MyComponent from './components/MyComponent'

// 6 - CSS Modules
import Title from './components/Title'

function App() {
  {/* 4 - Inline style dinâmico */}
  const n = 15

  // 5 - Classes Dinâmicas
  const redTitle = true

  return (
    <div className='App'>
      {/* 1 - CSS Global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilo inline</p>
      {/* 4 - Inline style dinâmico */}
      <h2 style={n>10 ? {color: "purple"} : {color: "magenta"}}>
        CSS Dinâmico
      </h2>
      <h2 style={n>20 ? {color: "purple"} : {color: "magenta"}}>
        CSS Dinâmico 2
      </h2>
      {/* 5 - Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter uma classe</h2>
      {/* 6 - CSS modules */}
      <Title />
    </div>
  )
}

export default App
