import React from "react";
import { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import '../styles/styles.css';
import axios from "axios";

const Dashboard = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

    const deleteEntry = async (username) => {
        axios.post('http://localhost:5000/delete', { username })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
        
        setName(name.filter(entry => entry.username !== username));
    }

    const editEntry = (username) => {
        
    }
    const names = async () => {
        const response = await fetch('http://localhost:5000/database');
        setName(await response.json())
    }
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
                <h1>Database</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Password</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {name.map((data) => {
                        return (

                            <tbody>
                                <tr>
                                    <td>{data.username}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.password}</td>
                                    <td>{data.email}</td>
                                    <td><button onClick={() => editEntry}>edit</button></td>
                                    <td><button onClick={() => deleteEntry(data.username)}>delete</button></td>
                                </tr>
                            </tbody>

                        )
                    })}
                </table>
                <hr></hr>
                <br />
            </div>
        );
    }
};

export default Dashboard;