import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This website supports registering an account and signing in to it.</p>
            <hr></hr>
            <br />
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>
    );
};

export default Home;