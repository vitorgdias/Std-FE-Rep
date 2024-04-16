// Template Expression

const TemmplateExpressions = () => {
    const name = "Vitor"

    const data = {
        age: 30,
        job: "QA"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemmplateExpressions