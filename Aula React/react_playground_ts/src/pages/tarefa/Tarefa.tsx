import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() =>{
    if (completed) {
      setTarefa('Parabéns! A Tarefa foi concluída!')
    }

  }, [completed])

  return (
    <div>
    <h2>Componente Tarefa</h2>
    <h3>{tarefa}</h3>
    <p>Conclua a tarefa</p>
    <button onClick={() => setCompleted(true)}>Concluir a Tarefa</button>
    </div>
  )
}

export default Tarefa