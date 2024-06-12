import React from "react";


import Past from '../img/Past-1.png'
import Past2 from '../img/Past-2.png'
import Past3 from '../img/Past-3.png'


const Dirctors = ()=>{


return(



    <>

<div class="About-main-card-1-ah">
                    <h2>News Dirctors</h2>
                    <div class="Brooklyn-Simmons-box">


                        <div class="Brooklyn-Simmons-card">
                            <div class="Brooklyn-Simmons-logo-div">
                                <div class="Brooklyn-Simmons-logo">
                                <img src={Past} alt=""/>
                                </div>
                                <div class="Brooklyn-Simmons-tital">
                                    <span>
                                        <p>News Director</p>
                                        <a href="#">Current</a>
                                    </span>
                                    <h2>Brooklyn Simmons</h2>
                                </div>
                            </div>
                            <button>Send email</button>
                        </div>

                        

                        <div class="Brooklyn-Simmons-card">
                            <div class="Brooklyn-Simmons-logo-div">
                                <div class="Brooklyn-Simmons-logo">
                                <img src={Past2} alt=""/>
                                </div>
                                <div class="Brooklyn-Simmons-tital">
                                    <span>
                                        <p>News Director</p>
                                        <a href="#">Past</a>
                                    </span>
                                    <h2>Ronald Richards</h2>
                                </div>
                            </div>
                            <button>Send email</button>
                        </div>



                        <div class="Brooklyn-Simmons-card">
                            <div class="Brooklyn-Simmons-logo-div">
                                <div class="Brooklyn-Simmons-logo">
                                <img src={Past3} alt=""/>
                                </div>
                                <div class="Brooklyn-Simmons-tital">
                                    <span>
                                        <p>News Director</p>
                                        <a href="#">Past</a>
                                    </span>
                                    <h2>Sally Ramirez</h2>
                                </div>
                            </div>
                            <button>Send email</button>
                        </div>


                    </div>
               
                    </div>

    </>
    
)




}



export default Dirctors