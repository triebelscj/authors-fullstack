import React from 'react'
import { Link, navigate } from '@reach/router'

import { useState } from 'react';
import axios from 'axios';


function New() {
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/api/rentals/new', {
            address
        })
            .then(() => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (
        <div>
            {errors.map((err, idx) => <p key={idx} style={{ color: 'red' }}>{err}</p>)}
            <h1>Favorite Authors</h1>
            <Link className="add-new" to="/">Home</Link>
            <h2>Add new Author:</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={address} onChange={event => setAddress(event.target.value)} />
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;
