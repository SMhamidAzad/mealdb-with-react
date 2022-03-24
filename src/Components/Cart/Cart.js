import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cartDiv'>
            <h2>Order summary</h2>
            <h4>Order Item List: </h4>
            <ol className='addItem'>
            {
                cart.map(item => <li>{item.strMeal}</li>)
            }
            </ol>
        </div>
    );
};

export default Cart;