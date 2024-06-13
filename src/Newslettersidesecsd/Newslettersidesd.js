import React from 'react'


import sidenewsletterimg1 from "../img/side-newsletter-img-1.png"
import sidenewsletterimg2 from "../img/side-newsletter-img-2.png"
import sidenewsletterimg3 from "../img/side-newsletter-img-3.png"
import { useNavigate } from 'react-router-dom'


const Newslettersidesd = () => {
    const navigate = useNavigate()

    const newsletterdetail = () => {
        navigate('/newsletterarticle')
    }
    return (
        <>
          
                <div class="row">
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box" onClick={newsletterdetail}>
                            <img src={sidenewsletterimg1} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box" onClick={newsletterdetail}>
                            <img src={sidenewsletterimg2} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box" onClick={newsletterdetail}>
                            <img src={sidenewsletterimg3} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-subscribe-box" onClick={newsletterdetail}>
                            <h5>Subscribe to our Newsletter, so you'll never miss one</h5>
                            <input type="email" name="" id="" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
                
        </>
    )
}

export default Newslettersidesd