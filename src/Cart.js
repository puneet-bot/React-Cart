import React from 'react';
import CartItem from './CartItem';

function Cart() {
    return (
        <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

    export default Cart;