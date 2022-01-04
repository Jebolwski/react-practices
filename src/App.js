import React, { useEffect, useState } from 'react'

import { Loading } from './components/Loading/Loading.js'

const App = () => {

  //!states
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(true)


  //!effects
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((result) => { setData(result); setLoading(false) })
  })


  if (loading) {
    return (
      <>
        <Loading />
      </>
    )

  }
  else {
    return (
      <>
        <h1
        >{count}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increase</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>Decrease</button>

        {data.map(data => (
          <ul key={data.id}>
            <li>{data.name}</li>
            <li>{data.id}</li>
          </ul>

        ))
        }

      </>
    )
  }

}

export default App
