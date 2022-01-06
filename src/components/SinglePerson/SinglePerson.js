import React, { useEffect, useState } from 'react'
import { Loading } from '../Loading/Loading'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


export const SinglePerson = ({history}) => {

    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})



    useEffect(() => {
        getPersons()
    },[])

    let getPersons = async () => {
        let response = await fetch(`http://localhost:8000/persons/${id}`)
        let data = await response.json()
        setLoading(false)
        setData(data)
        }

    const updatePerson = async () =>{
        await fetch(`http://localhost:8000/persons/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const createPerson = async () => {


        await fetch("http://localhost:8000/persons/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            name: JSON.stringify(data)
        })
    }

    

    
    const deletePerson = async () => {
        await fetch(`http://localhost:8000/persons/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        history.push('/')
    }


    let handleSubmit = () =>{
        updatePerson()
        history.push("/users/")
    }


    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }
    else {
        return (
            <div>
                <Link to="/users/"><button onClick={handleSubmit}>Save</button></Link>
                <Link to="/users/"><button onClick={deletePerson}>Delete</button></Link>
                
                <textarea onChange={(e) => { setData({ ...data, 'name': e.target.value }) }} placeholder="Edit data" value={data?.name}></textarea>
            </div>
        )
    }

}
