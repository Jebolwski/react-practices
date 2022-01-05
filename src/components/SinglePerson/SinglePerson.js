import React, { useEffect, useState } from 'react'
import { Loading } from '../Loading/Loading'

import { useParams } from 'react-router'


export const SinglePerson = () => {

    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then((result) => { setData(result); setLoading(false) })
    },[id])


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
                <li>{data.name}</li>
            </div>
        )
    }

}
