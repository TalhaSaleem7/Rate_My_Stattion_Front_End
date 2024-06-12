import React from "react";


import Assistant  from '../img/Assistant.png'
import past  from '../img/Past-3.png'
import hellopng  from '../img/doticon.png'
import  moudal  from '../img/imge-2.jpg'
import  moudal1  from '../img/moudal1.jpg'
import  moudal2  from '../img/moudal2.jpg'
import  moudal3  from '../img/moudal3.jpg'
import  moudal4  from '../img/moudal4.jpg'



const Cooperah1= ()=>{


return(



    <>
         
         <div class="About-main-card-1-ah">
            <div class="America-Sweatshirt">

                <div class="America-ah">
                    <div class="America-ah-part-1">
                    <img src={moudal} alt=""/>
                    </div>
                    <div class="America-ah-part-2">
                    <img src={moudal1} alt=""/>
                    <img src={moudal2} alt=""/>
                    <img src={moudal3} alt=""/>
                    <img src={moudal4} alt=""/>
                    </div>
                </div>

                <div class="Sweatshirt-ah">
                    <h2>America Needs Local News Sweatshirt</h2>

                    <div class="Sweatshirt-ah-select-box">

                      <div class="Sweatshirt-ah-select-card">
                        <p>Color</p>
                         <select name="cars" id="cars">
                                <option value="" disabled="" selected="" hidden="">Color</option>
                                <option value="option2">Black</option>
                                <option value="option3">Red</option>
                                <option value="option4">White</option>
                         </select>
                      </div>


                      <div class="Sweatshirt-ah-select-card">
                        <p>Size</p>
                         <select name="cars" id="cars">
                                <option value="" disabled="" selected="" hidden="">XL</option>
                                <option value="option2">XL</option>
                                <option value="option3">XLl</option>
                                <option value="option4">X</option>
                         </select>
                      </div>

                    </div>

                    <div class="Sweatshirt-ah-select-box">

<div class="Sweatshirt-ah-select-card">
  <p>Qty</p>
  <input type="number" placeholder=""/>
</div>


<div class="Sweatshirt-ah-select-card">
<h2>$33.50</h2>
<button>Add to cart</button>
</div>

</div>

                    <div class="Description-box-tital">

                        <h2>Description</h2>
                       <p>Our #AMNewser Sweatshirt is perfect to wear in the freezing newsroom. Don’t wait, this style is a limited edition, so place your order today!
                       </p>

                       <p>A sturdy and warm sweatshirt bound to keep you warm in the colder months. A pre-shrunk, classic fit sweater that’s made with air-jet spun yarn for a soft feel and reduced pilling.
                       </p>

                       <p>Above all, it feels soft and lightweight, with the right amount of stretch. It’s comfortable and flattering for both men and women, and you can choose from a large variety of different colors.
                       </p>

                       <a href="#">See more</a>



                    </div>


                </div>

            </div>
        </div>

    </>
    
)




}



export default Cooperah1
