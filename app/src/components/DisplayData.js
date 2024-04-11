import { useState, useEffect } from 'react';
import '../styles/styles.css';
import axios from 'axios';
function DisplayData() {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

    const deleteEntry = async (username) => {
        axios.post('http://localhost:5000/delete',{username})
        .then(response => {
            console.log(response);
            setName(name.filter(entry => entry.username !== username));
            this.forceUpdate()
        })
        .catch(err => console.log(err));
    }
    const editEntry = (username)=>{

    }
    const names = async () => {
        const response = await fetch('http://localhost:5000/database');
        setName(await response.json())
    }
    return (
        <div>
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
        </div>
    )

}
export default DisplayData;