import React, { useState, useContext } from "react";
import { Link, redirect, Navigate } from "react-router-dom";
import axios from 'axios';
import AuthContext from "../context/AuthProvider";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',{username,password})
        .then(response => {
            console.log(response);
                const obj = JSON.stringify(response.data);
                if(JSON.parse(obj) === 'Login failed'){
                    
                }else{
                    const info = JSON.stringify(response.data[0]);
                    setAuth(JSON.parse(info));
                    Navigate('/Dashboard')
                } 
        })
        .catch(err => console.log(err));
        setUsername('');
        setPassword('');
        
    }
    const loader = async () => {
        const user = await setAuth();
        if (!user) {
          return redirect("/Dashboard");
        }
        return null;
      };
    return (
        <div>
            <Link to="/" class="home_button">Home</Link>
            <h1>Login Page</h1>
            <p>Enter your username and password</p>
            <hr></hr>
            <div class="login_container">
            <form onSubmit={handleSubmit} class="login">
                <div>
                <label for="user">Username:</label>
                <input 
                type="text"
                required 
                id="user"
                name="user"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
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
                <div class="submit_container">
                    <input type="submit" value="Login"/>
                    </div>
            </form>
            </div>
            
        </div>
    );
};
 
export default Login;