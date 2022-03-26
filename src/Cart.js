import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:399,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:20099,
                    title:'Phone',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:99999,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3
                }
            ]
        }
        // Method 2 in constructor.
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty==0){
            return;
        }
            products[index].qty-=1;
        this.setState({
            products
        }) 
    }
    handleDelete=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id)
        this.setState({
            products:items
        })
    }
    render(){return (
        <div className="cart">
            {this.state.products.map((prod)=>{
                return <CartItem products={prod} key={prod.id} increaseQuantity={this.handleIncreaseQuantity} decreaseQuantity={this.handleDecreaseQuantity} onDelete={this.handleDelete} />
            })}
        </div>
    )}
}

    export default Cart;