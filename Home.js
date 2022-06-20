import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
        console.log("hiii");
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        console.log(result);
        setUser(result.data.reverse());
    }

    const deleteUser = async id  => {
           await axios.delete(`http://localhost:3004/users/${id}`);
           loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table table-light table-lg table-bordered table-shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                       {
                        users.map((user,index) => (
                            <tr>
                                <th scope = "row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary mr-4 ml-4" to ={'/users/view/${user.id}'}>view</Link>
                                    <Link class="btn btn-outline-primary mr-4 ml-4" to ={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link class="btn btn-danger mr-4 ml-4" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home; //to access this component externally