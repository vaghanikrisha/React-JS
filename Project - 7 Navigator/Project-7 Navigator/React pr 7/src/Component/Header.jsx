import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center  navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand shadow p-2" href="#" style={{marginLeft:"350px",fontSize:"25px",color:"white", background:"#a49371"}}>Navigator Crud</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3 ">
                                <Link to="/" className="nav-link active shadow" aria-current="page" href="#" style={{marginLeft:"350px",fontSize:"25px",color:"white"}}>Add</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/view" className="nav-link active shadow" aria-current="page" href="#"style={{marginLeft:"20px",fontSize:"25px",color:"white"}}>View</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
