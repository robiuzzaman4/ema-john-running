import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleClearCart, children }) => {
    // const { cart } = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <button onClick={handleClearCart} className='clearBtn'>
                Clear Cart
            </button>
            {children}
        </div>
    );
};

export default Cart;