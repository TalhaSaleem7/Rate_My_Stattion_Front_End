import React from 'react'


import sidenewsletterimg1 from "../img/side-newsletter-img-1.png"
import sidenewsletterimg2 from "../img/side-newsletter-img-2.png"
import sidenewsletterimg3 from "../img/side-newsletter-img-3.png"


const Newslettersidesd = () => {
    return (
        <>
            <div class="newsletter-side-sec">
                <div class="newsletter-side-head">
                    <h3>Newsletter</h3>
                    <a href="#">See all</a>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box">
                            <img src={sidenewsletterimg1} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box">
                            <img src={sidenewsletterimg2} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box">
                            <img src={sidenewsletterimg3} alt="" />
                            <div class="side-newsletter-txt">
                                <h5>20 Things Jurnalism Students Should Know Before Working in Local News Station</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="side-subscribe-box">
                            <h5>Subscribe to our Newsletter, so you'll never miss one</h5>
                            <input type="email" name="" id="" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="newsletter-follow-box">
                    <h4>Follow RMS</h4>
                    <div class="follow-us-rate">
                        <ul>
                            <li><a href="#"><i class="ri-facebook-fill"></i> @RateMyStation </a></li>
                            <li><a href="#"><i class="ri-instagram-line"></i> @RateMyStation </a></li>
                            <li><a href="#"><i class="ri-twitter-fill"></i>  @RateMyStation </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newslettersidesd