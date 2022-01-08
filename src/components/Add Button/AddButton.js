import React from 'react'
import { Link } from 'react-router-dom'
const AddButton = () => {
    return (
        <div>
            <Link to="/person/new/">
                Add
            </Link>
        </div>
    )
}

export default AddButton
