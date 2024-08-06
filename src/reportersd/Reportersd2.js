import React, { useEffect, useState } from 'react'

import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png"; 
import axios from 'axios';
import { baseurl } from '../baseurl';




const Reportersd2 = () => {

    const [stationratings, setStationRatings] = useState([]);

    
useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user)
      // setUser(user)  

      fetchUserData(user.id);

    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getratings/${userId}`);
      console.log('ahtisahm' , response.data)
     
     
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
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
                        <div class="col-lg-4">
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
                        <div class="col-lg-4">
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
                        <div class="col-lg-4">
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
                        <div class="col-lg-4">
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
                    <div class="latest-comment-txt-input-box">
                    <input type="text" placeholder="Write a review..."/>

                    <button><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.1492 10.4967C10.017 10.5599 9.93651 10.5944 9.86178 10.6289C8.79268 11.1634 7.71782 11.6922 6.65446 12.2383C6.30959 12.4165 6.01645 12.3992 5.68882 12.1923C3.94146 11.0887 2.1826 9.99086 0.423748 8.89876C0.153597 8.73207 -0.0303358 8.51939 0.00415153 8.18602C0.032891 7.85264 0.251311 7.6802 0.550201 7.56525C6.90162 5.07066 13.2473 2.57608 19.593 0.0757424C20.162 -0.148425 20.5759 0.161961 20.6276 0.524078C20.6506 0.702263 20.6103 0.909187 20.5414 1.08162C19.4952 3.76589 18.4376 6.45015 17.3858 9.13442C15.9545 12.7843 14.5176 16.4342 13.0864 20.0842C12.9082 20.544 12.5518 20.7452 12.1724 20.5842C12.0287 20.5267 11.885 20.406 11.8046 20.2796C10.6607 18.469 9.52841 16.6527 8.39607 14.8363C8.23513 14.5777 8.24663 14.3305 8.37883 14.0604C8.93063 12.9683 9.47668 11.8704 10.0227 10.7783C10.0515 10.7093 10.086 10.6289 10.1492 10.4967Z" fill="#194D79"/>
</svg></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reportersd2