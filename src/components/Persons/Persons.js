import React,{useEffect,useState} from 'react'

import {Link} from 'react-router-dom'

export const Persons = () => {
     
    const [data,setData] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then((result) => { setData(result) })
      })

    return (
        <div>
            {data.map(data => (
          <ul key={data.id}>
            <Link to={`/user/${data.id}`}><li>{data.name}</li></Link>
            <li>{data.id}</li>
          </ul>

        ))
        }
        </div>
    )
}
