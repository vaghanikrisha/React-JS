import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import './header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{padding:"20px 0"}}>
                <div className="col-lg-3 col-sm-12 col-md-6">
                <a className="navbar-brand" href="#"><img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" /></a>

                </div>
                <div className="col-lg-5  col-sm-12 col-md-6">
                <form className="d-flex" role="search">
                    <input className="form-control border border-success rounded-0 rounded-start-2" type="search" placeholder="Search For items..." aria-label="Search" />
                    <select className="border border-success rounded-0 outline-0">
                      <option value="">All Category</option>
                      <option value="">Mens</option>
                      <option value="">Womens</option>
                      <option value="">Electronics</option>
                    </select>
                    <button className=" btn-outline-success rounded-0 rounded-end-2" type="submit"><IoSearch /></button>
                </form>

                </div>
                <div className="col-lg-4 col-sm-12 col-md-6 d-flex justify-content-between">
                <span className='text-end d-flex align-items-center' style={{marginLeft:"130px"}}> <i><LuUser /></i> Account</span>
                <span className='text-end d-flex align-items-center'><i><FaRegHeart /></i>Wishlist</span>
                <span className='text-end d-flex align-items-center'><i><RiShoppingCartLine /></i>Cart</span>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header
