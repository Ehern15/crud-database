import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [success, setSuccess] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { firstName, lastName, email, username, password })
            .then(result => {
                console.log(result);
                const obj = JSON.stringify(result.data);
                if (JSON.parse(obj) === 'success') {
                    navigate('/login');
                }else{
                    setSuccess(false);
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to="/" class="home_button">Home</Link>
            <h1>Register Page</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <div class="register_container">
                <form onSubmit={handleSubmit} class="register">
                    <div>
                        <label for="name">First name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="lastName">Last name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="user">Username:</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            value={username}
                            required
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="pwd">Password:</label>
                        <input
                            type="password"
                            id="pwd"
                            name="pwd"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {success === false ? (
                        <p class="error_message">That username already exists!</p>
                    ) : (
                        <p></p>
                    )}
                    
                    <div class="submit_container">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;