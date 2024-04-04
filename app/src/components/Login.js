import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Login Page</h1>
            <form action="">
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