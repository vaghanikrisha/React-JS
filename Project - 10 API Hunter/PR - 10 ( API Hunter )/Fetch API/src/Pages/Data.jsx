import React, { useEffect, useState } from 'react';
import './Data.css'; 

const Data = () => {
    const [post, setPost] = useState([]);

    const fetchUser = () => {
        fetch(`https://dummyjson.com/recipes`)
            .then(response => response.json())
            .then(Allpost => {
                setPost(Allpost.recipes);
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div className="data-container">
            <h1 className="py-3" style={{margin:"30px 0", fontSize:'40px',color:'#333'}}>Quotes API Using Fetch Mathod</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">name</th>
                                    <th scope="col">ingredients</th>
                                    <th scope="col">instructions</th>
                                    <th scope="col">difficulty</th>
                                    <th scope="col">cuisine</th>
                                    <th scope="col">caloriesPerServing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post && post.map((post) => (
                                        <tr key={post.id}> 
                                            <th scope="row">{post.id}</th>
                                            <td>{post.name}</td>
                                            <td>{post.ingredients}</td>
                                            <td>{post.instructions}</td>
                                            <td>{post.difficulty}</td>
                                            <td>{post.cuisine}</td>
                                            <td>{post.caloriesPerServing}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
