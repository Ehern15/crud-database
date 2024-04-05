import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register',{firstName,lastName,email,username,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">First name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value = {firstName}
                    onChange={(e) => setFirstName(e.target.value)} 
                    />
                </div>
                <div>
                    <label for="lastName">Last name:</label>
                    <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value = {lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label for="user">Username:</label>
                    <input 
                    type="text" 
                    id="user" 
                    name="user" 
                    value = {username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label for="pwd">Password:</label>
                    <input 
                    type="password" 
                    id="pwd" 
                    name="pwd"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;