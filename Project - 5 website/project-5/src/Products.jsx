import React from 'react'
import './product.css'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Products = () => {
  return (
    <section className='product'>
        <div className='container'>
            <div className="row">
                <div className="title text-center d-flex justify-content-center">
                    <div className="col-lg-6">
                        <h2>Popular Products</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    </div>
                </div>

                <div className="product-content row">
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Vegetables</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></i>
                                    <p>Fresh organic villa farm lomon 500gm pack</p>
                                    <span className='price'>$120.25 <span className='oldPrice'>$123.25</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Snack</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Best snakes with hazel nut pack 200gm</p>
                                    <span className='price'>$145 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Fruits</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></i>
                                    <p>Fresh organic apple 1kg simla marming</p>
                                    <span className='price'>$120.25 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-4">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Bakery</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Delicious white baked fresh bread and toast</p>
                                    <span className='price'>$20 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-0">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/11.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Snacks</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Sweet crunchy nut mix 250gm pack</p>
                                    <span className='price'>$120.25 <span className='oldPrice'>$123.25</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-0">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Fruits</h6>
                                    <i><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></i>
                                    <p>Organic fresh venila farm
                                        watermelon 5kg</p>
                                    <span className='price'>$50.30 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-0">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/10.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Snack</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Sweet crunchy nut mix 250gm pack</p>
                                    <span className='price'>$120.25 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 mb-3 mb-lg-0">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body text-center">
                                    <h6>Bakery</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Delicious white baked fresh bread and toast</p>
                                    <span className='price'>$20 <span className='oldPrice'>$123.25</span></span>
                                </div>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    </section>
  )
}

export default Products
