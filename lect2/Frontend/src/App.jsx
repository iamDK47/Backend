import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState(0)

  useEffect(() => {
    fetch('/next/jokes').then(res => res.json()).then(res => setData(res))
  },[])
  console.log(data)
  
  return (
    <>
      <div >
        <p>Jokes : {data.length}</p>
      </div>
      <div>
        {data && data.map((jokes) => (
          <h1 key={jokes.id}>
            {jokes.joke}
          </h1>
        ))}
      </div>
    </>
  )
}

export default App
