import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import DisplayData from "./DisplayData";
import '../styles/styles.css';

const Dashboard = () => {
    
    const {
        auth,
        setAuth,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth();
    if (!isLoggedIn) {
        return <Navigate replace to="/login" />;
      } else {
    return (
        <div>
            <Link to="/" class="home_button">Home</Link>
            <h1>Dashboard</h1>
            <p>This is your dashboard</p>
            <hr></hr>
            <DisplayData/>
            <hr></hr>
            <br />
        </div>
    );
      }
};

export default Dashboard;