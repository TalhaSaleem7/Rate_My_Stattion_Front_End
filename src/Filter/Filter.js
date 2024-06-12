import React from "react";

import kabc from '../img/kabc.png'


const Filter = ()=>{


return(



    <>
                    <div class="job-ah-post">
                        <h2>My Ratings<span> (19)</span></h2>


                        <div class="job-ah-Filter">
                            <div class="job-ah-Filter-card">
                                <p>Filter:</p>
                                <select name="cars" id="cars">
                                    <option value="" disabled="" selected="" hidden="">Job type</option>
                                    
                                    <option value="option2">option1</option>
                                    <option value="option3">option2</option>
                                    <option value="option4">option3</option>
                                  </select>
                            </div>


                            <div class="job-ah-Filter-card">
                                <p>Short:</p>
                                <select name="cars" id="cars">
                                    <option value="" disabled="" selected="" hidden="">Newest</option>
                                   
                                    <option value="option2">option1</option>
                                    <option value="option3">option2</option>
                                    <option value="option4">option3</option>
                                  </select>
                            </div>
                        </div>
                    </div>

                    </>
    
)




}



export default Filter