import React from 'react'

const MyCartCheckoutBox = () => {
    return (
        <>
            <div className="mycart-order-summary">
                <h4>Order Summary</h4>
                <div className="ordersummary-subtotal">
                    <h6>Subtotal</h6>
                    <p>$33.50</p>
                </div>
                <div className="ordersummary-subtotal">
                    <h6>Shipping</h6>
                    <p>Free</p>
                </div>
                <input type="number" name="" id="" placeholder="Add cupon code here..." />
                <div className="prod-order-total-txt">
                    <h5>Total</h5>
                    <h5>$33.50</h5>
                </div>
                <a href="#">Checkout</a>
            </div>
        </>
    )
}

export default MyCartCheckoutBox