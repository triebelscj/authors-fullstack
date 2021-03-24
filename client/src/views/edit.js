import { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



function Edit(props) {
    const [address, setAddress] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8080/api/rentals/' + props.id)
            .then(response => {
                const { address } = response.data;
                setAddress(address);
            })
    }, []);



    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        console.log(address);

        axios.put('http://localhost:8080/api/rentals/' + props.id, {
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
            <h1>Edit a Rental</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Address</label>
                    <input value={address} onChange={event => setAddress(event.target.value)} />
                </div>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Edit;