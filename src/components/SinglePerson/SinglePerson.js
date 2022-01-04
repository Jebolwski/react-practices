import React, { useEffect, useState } from 'react'

import { Loading } from '../Loading/Loading'


export const SinglePerson = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`)
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
            <div>
                <li>{data.name}</li>
            </div>
        )
    }

}
