import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    return (
        <div className="cart">
            {props.products.map((prod) => {
                return <CartItem
                    products={prod} key={prod.id}
                    increaseQuantity={props.increaseQuantity}
                    decreaseQuantity={props.decreaseQuantity}
                    onDelete={props.onDelete} />
            })}
        </div>
    )
}

export default Cart;