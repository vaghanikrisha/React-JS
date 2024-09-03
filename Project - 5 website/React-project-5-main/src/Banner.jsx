import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section className='banner'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-5  col-sm-12 col-md-8">
                    <h5><span>100%</span>Organic Fruits</h5>
                    <h1>Explore fresh & juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    <div className="shop">
                        <button className='rounded border-0'><a href="#">Shop Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
