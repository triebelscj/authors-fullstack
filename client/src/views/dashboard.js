import React from 'react'
import { Link, navigate } from '@reach/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/rentals')
            .then(response => setRentals(response.data))
    }, []);

    function handleDelete(id) {
        console.log('Bitch got Deleted', id);

        axios.delete('http://localhost:8080/api/rentals/' + id)
            .then(() => {
                const filtered = rentals.filter(rental => rental._id !== id);
                setRentals(filtered);
                alert('Successfully deleted!');
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link className="add-link" to="/authors/new">Add New Author</Link>
            <h2>We have Quotes by:</h2>
            <div className="container">
                <div className="render-authors">
                    <h3>Authors</h3>
                    <h3>Available Actions</h3>
                </div>

                {rentals.map((rental, idx) => (
                    <div div className="dash-butt" key={rental._id} >
                        <p>{rental.address}</p>
                        <div className="button-box">
                            <button className="yellow" onClick={() => navigate('/rentals/' + rental._id + '/edit')}>Edit</button>

                            <button className="red" onClick={() => handleDelete(rental._id)}>Delete</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Dashboard;
