import React,{useEffect,useState} from 'react'

import {Link} from 'react-router-dom'

export const Persons = () => {
     
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPersons()
      },[])


      let getPersons = async () =>{
        let response = await fetch("http://localhost:8000/persons")
        let data = await response.json()
        let load = setLoading(false)
        setData(data)
        console.log(data);
        }
      
      if(loading){
        return (
          <>
          <h1>Loading...</h1>
          </>
        )
      }


      else{return (
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
    
}
