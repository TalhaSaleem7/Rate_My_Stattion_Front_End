import React from 'react'

import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png"; 



const Reportersd = () => {
    return (
        <>
            <div class="latest-rating-box">
                <div class="latest-rating-user-verified">
                    <div class="rating-user-box">
                        <img src={Latestuserratingicon} alt="" />
                        <div class="latest-rating-user-txt">
                            <h5>Reporter | MMJ (OMB)</h5>
                            <select name="" id="">
                                <option value="">Job details</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                            </select>
                        </div>
                    </div>
                    <div class="verified-rating-box">
                        <h6><span><i class="ri-verified-badge-fill"></i></span> Verified Rating <span
                            class="rating-of">of</span></h6>
                        <div class="karc-txt-logo">
                            <img src={karbabclogo} alt="" />
                            <h4>KABC</h4>
                        </div>
                    </div>
                </div>
                <div class="review-news-director">
                    <div class="row">
                        <div class="col-lg-4 p-0">
                            <div class="director-urer">
                                <img src={reviewdirectorimg} alt="" />
                                    <div class="director-name-txt">
                                        <div class="news-director-current">
                                            <h5>News Director</h5>
                                            <a href="#">Current</a>
                                        </div>
                                        <h3>Brooklyn Simmons</h3>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="review-director-para">
                                <h6>Review of News Director</h6>
                                <h5>Nice guy, but lacks decisiveness, leadership, and aggressiveness.</h5>
                                <p>Eu elementum pellentesque nibh molestie. Tempor purus sed pellentesque
                                    integer non. Nec sed tortor nec quis tempor diam non turpis. Sed
                                    venenatis at montes, leo tellus egestas. Nulla pharetra.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="racial-discrimination">
                    <h6>While working here, this person experienced</h6>
                    <p>Sexual discrimination, Racial discrimination, Sexual harassment, An overall work environment</p>
                </div>
                <div class="racial-discrimination">
                    <h6>Additional comments</h6>
                    <p>One of the best places you could ever work. Very relaxed environment.</p>
                    <h5>Everyone is the best at what they do. Management is great. No complaints. Eu pellentesque nibh... <a href="#">see more</a></h5>
                </div>
                <div class="newroom-coworker-box">
                    <div class="row">
                        <div class="col-lg-4 col-md-4">
                            <div class="newroom-coworker-txt">
                                <h6>Newsroom rating</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
                                    <rect x="0.148438" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="41.9414" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="83.7363" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="125.529" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="167.324" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2" />
                                </svg>
                                <h5>This newsroom is friendly</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="newroom-coworker-txt">
                                <h6>Coworkers rating</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
                                    <rect x="0.164185" y="0.888674" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="41.9572" y="0.888674" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="83.7521" y="0.888674" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="125.545" y="0.888674" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="167.34" y="0.888674" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                </svg>
                                <h5>Super friendly</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="newroom-coworker-txt">
                                <h6>Would recommend working here?</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
                                    <rect x="0.179932" y="0.158203" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="41.9729" y="0.158203" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="83.7678" y="0.158203" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400" />
                                    <rect x="125.561" y="0.158203" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2" />
                                    <rect x="167.356" y="0.158203" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2" />
                                </svg>
                                <h5>I'm not sure</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="four-select-tab">
                    <h5>Tags:</h5>
                    <ul>
                        <li><a href="">Organized</a></li>
                        <li><a href="">Positive</a></li>
                        <li><a href="">Fun</a></li>
                    </ul>
                </div>
                <div class="like-report-submitted">
                    <div class="like-report-txt">
                        <ul>
                            <li><span><i class="ri-thumb-up-fill"></i></span> Liked</li>
                            <li><span><i class="ri-flag-fill"></i></span> Report</li>
                        </ul>
                    </div>
                    <p>submitted: 03-24-21</p>
                </div>
                <div class="latest-rating-comment-box">
                    <div class="latest-commentor-img">
                        <img src={karbabclogo} alt="" />
                    </div>
                    <div class="latest-comment-txt-box">
                        <p>Thank you for the review, we really appreciate it and we will try to be even better. Thank you!</p>
                        <span>2 weeks ago</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reportersd