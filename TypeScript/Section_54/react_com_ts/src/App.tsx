import React, { createContext } from "react";

// 4 - Impotação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desentruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - Use State
import State from "./components/State";

// 10 - Consumindo o Contexto
import Context from "./components/Context";

// 8  - Types
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Vitor";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - Type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "Opa";

  const testandoFixed: fixed = "Isso";

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="primeiro post"
          content="algum conteúdo"
          commentsQty={5}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="segundo post"
          content="outro conteúdo"
          commentsQty={2}
          tags={["ts", "react"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
