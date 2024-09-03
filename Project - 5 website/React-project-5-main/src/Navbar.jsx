import React from 'react'
import { FiPhone } from "react-icons/fi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import './navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                        <div className="col-lg-2">
                            <a className="navbar-brand" href="#"><button><HiBars3CenterLeft /></button></a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="col-lg-7 d-flex justify-content-center">
                        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Category <i><FaAngleDown /></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Products <i><FaAngleDown /></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Pages <i><FaAngleDown /></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Blog <i><FaAngleDown /></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Elements <i><FaAngleDown /></i></a>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className='contect-no text-end'>
                            <a href="#"><span><FiPhone /></span> +123 ( 456 ) ( 7890 )</a>
                        </div>
                        </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
