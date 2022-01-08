import React, { useEffect, useState } from 'react';

import { Loading } from './components/Loading/Loading.js';
import { Home } from './components/Home/Home.js';
import  Persons  from './components/Persons/Persons.js';
import  SinglePerson from './components/SinglePerson/SinglePerson';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const App = () => {

  //!states
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [person, setPerson] = useState(true)


  //!effects
  useEffect(() => {
    
  },[])

  let getPersons = async () =>{
    let response = await fetch("http://localhost:8000/persons")
    let data = await response.json()
    console.log(data);
    }

  return (
    <>
      <Router>
        <ul style={{ display: "flex", listStyle: "none", fontWeight: "600", }}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/users/"><li>Users</li></Link>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/" element={<Persons />} />
          <Route path="/user/:id" element={<SinglePerson />} />
        </Routes>
      </Router>
    </>
  )
}



export default App
