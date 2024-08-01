import React from "react";


import Past  from '../img/Past-1.png'


import line  from '../img/line-icon.png'

import gol  from '../img/gol-icon-ah.png'
import { differenceInMonths, parseISO } from 'date-fns';
import { baseurl } from "../baseurl";
import axios from "axios";

const Jobah= ({jobContent})=>{
    console.log('jobContentsss' , jobContent)


    const calculateDurationInMonths = (start, end) => {
        const startDate = parseISO(start);
        const endDate = parseISO(end);
        
        const years = endDate.getFullYear() - startDate.getFullYear();
        const months = endDate.getMonth() - startDate.getMonth();
        
        return years * 12 + months;
      };



      const Decline = async (e) => {
       

        const job_id = e


        console.log('hhhh' , job_id)
        try {
          const response = await axios.post(`${baseurl}/declinejob`, {job_id });
          
    
         
        } catch (error) {
          
          console.error("Login error:", error);
        }
      };


return(



    <>
        
       
        <div class="Jacob-card-ah-box">

        {jobContent.map((job, index) => (                 
<div class="Jacob-card-ah">
    <div class="Director-ah-boxing">
        <div class="Director-ah-boxing-logo">

        <div class="span-logo-Director">
            <img src={Past} alt=""/>
        </div>

        <span>
            <h2>{job.User.username}</h2>
            <p>News Director</p>
        </span>
        </div>

        <p>Why hire me?</p>
    </div>

    <div class="Director-ah-boxing-2">
        <div class="Director-ah-boxing-list">
            <div class="Director-ah-boxing-list-logo">
                <img src={line} alt=""/> 
                <span><h2>Job Title</h2>
                <p>{job.Job.jobTitle}</p></span>
            </div>

            <div class="Director-ah-boxing-list-span">
                <h2>{job.Job.startDate}  -  {job.Job.endDate}</h2>
                <p>{calculateDurationInMonths(job.Job.startDate, job.Job.endDate)} months</p>
            </div>

        </div>
        <div class="Director-ah-boxing-list">
            <div class="Director-ah-boxing-list-logo">
            <img src={line} alt=""/>
                <span><h2>Job Type</h2>
                <p>{job.Job.jobType}</p></span>
            </div>

           
        </div>
       
    </div>


    <div class="Director-ah-boxing-3">
        <button onClick={() => Decline(job.job_id)} >Decline</button>

        <button class="interview-ah">Chat</button>
    </div>


</div>
        ))}









</div>

    </>
    
)




}



export default Jobah
