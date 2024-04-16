import './App.css'
// 2 - Importando componente
import FirstComponent from './components/FirstComponent'

// 4 - template Expression
import TemmplateExpressions from './components/TemmplateExpressions'

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

function App() {
  // 3 - Comentário
  return (
  <div className="App">
    {/* 3 - Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemmplateExpressions />
    <MyComponent />
    <Events />
  </div>
  )
}

export default App
