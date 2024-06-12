import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import cartprod1 from "../img/prod-cart-img-1.png";


const AmericonProductCart = ({ americanprod }) => {
      const [count, setCount] = useState(0);

      const handleIncrease = () => {
        setCount(count + 1);
      };

      const handleDecrease = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };

      const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
          setCount(value);
        }
      };
  return (
    <>
      {americanprod.map((americanproduct, index) => (
            <div className="americon-prod-cart">
            <img src={americanproduct.image} alt="" />
            <h3>{americanproduct.title}</h3>
            <div className="cart-counter">
                <span  onClick={handleDecrease} style={{ cursor: 'pointer' }}><FaMinus /> </span>
                <input type="number"  value={count} onChange={handleInputChange} min="0" />
                <span  onClick={handleIncrease} style={{ cursor: 'pointer' }}><FaPlus /></span>
            </div>
            <h4>{americanproduct.rate}</h4>
            <h6><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                <path d="M30.8781 16.4696C30.1912 15.7827 29.0777 15.7827 28.3908 16.4696L23.7438 21.1166L19.0961 16.469C18.4093 15.7821 17.2957 15.7821 16.6089 16.469C15.922 17.1558 15.922 18.2694 16.6089 18.9562L21.2565 23.6039L16.6118 28.2486C15.9249 28.9355 15.9249 30.049 16.6118 30.7359C17.2986 31.4227 18.4122 31.4227 19.099 30.7359L23.7438 26.0911L28.3879 30.7353C29.0748 31.4221 30.1884 31.4221 30.8752 30.7353C31.562 30.0485 31.562 28.9349 30.8752 28.248L26.231 23.6039L30.8781 18.9568C31.5649 18.27 31.5649 17.1564 30.8781 16.4696Z" fill="#828282"/>
                </svg>
            </h6>
        </div>
      ))}
    </>
  )
}

export default AmericonProductCart