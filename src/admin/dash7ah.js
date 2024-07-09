import React from "react";


import adminz from "../img/karc-abc-logo.png";
import Btn from "./btn";



const Dash7ah = ()=>{
  const cards = Array.from({ length: 9 }); // Create an array with 8 elements

return(

    <>

    <section className="ah1">

      <div className="Employees-table">
        <h2>Newsroom Account</h2>
      </div>

      <div className="Employees-table-inbox">

      <div className="Employees-Search">
        <input type="text" placeholder="Search by Username"/>

        <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.63059 0.571777C3.86405 0.571777 0 4.43582 0 9.20237C0 13.9689 3.86405 17.833 8.63059 17.833C10.629 17.833 12.4687 17.1538 13.9315 16.0137L17.5991 19.6812C18.016 20.0981 18.692 20.0981 19.1089 19.6812C19.5258 19.2643 19.5258 18.5884 19.1089 18.1715L15.4414 14.504C16.5818 13.041 17.2612 11.201 17.2612 9.20237C17.2612 4.43582 13.3971 0.571777 8.63059 0.571777ZM2.13509 9.20237C2.13509 5.615 5.04323 2.70687 8.63059 2.70687C12.218 2.70687 15.1261 5.615 15.1261 9.20237C15.1261 12.7897 12.218 15.6979 8.63059 15.6979C5.04323 15.6979 2.13509 12.7897 2.13509 9.20237Z" fill="#828282"/>
</svg></button>
      </div>

      <div className="Employees-tabs">
      <div className="filter-box ">
                      <p>Filter:</p>
                      <select name="" id="">
    <option value="" disabled selected>Type</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
</select>

<select name="" id="">
    <option value="" disabled selected>Location</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
</select>

<select name="" id="">
    <option value="" disabled selected>Verification</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
</select>
<p>Sort:</p>

<select name="" id="">
    <option value="" disabled selected>Newest</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
</select>
                </div>
               
      </div>
      
      </div>

    <table id="customers">
  <tr>

    <th>  
    ID
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Account
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>
    
    <th>    
    Type
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Status
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>   
    Verification 
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
    Join Date
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>

    <th>    
     Action
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z" fill="#828282"/>
      </svg>
    </th>


    
  </tr>
  <tbody>
  {cards.map((_, index) => (
  <tr  key={index}>
    <td>#0001</td>
    <td className="gg-td"><div className="admin-dp"><img src={adminz}alt="" /></div>KABC</td>
    <td>TV News</td>
    <td ><div className="new-online">Online</div></td>
    <td>Verified</td>
    <td>June 23, 2022</td>
    <td><Btn/></td>
 
    
  </tr>
  
  ))}
  </tbody>
    </table>

    </section>
    
    </>

)

}



export default Dash7ah