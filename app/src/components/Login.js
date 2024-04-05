import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('',{userName,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label for="user">Username:</label>
                <input 
                type="text"
                required 
                id="user"
                name="user"
                value = {userName}
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
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};
 
export default Login;