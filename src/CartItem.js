import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:99,
            title:'Phone',
            qty:100,
            img:''
        }
        // Method 2 in constructor.
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    increaseQuantity(){
        console.log('test',this)
    }
    decreaseQuantity=()=>{
        console.log('test',this)
    }
    delete=()=>{
        console.log('test',this)
    }
    render(){
        const {price,title,qty,image}=this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} alt="carts" src={image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{price}</div>
                    <div style={{color:'#777'}}>{title}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='increase'
                        className='action-icons'
                        src=''
                        //Method1 bind the values
                        // onClick={this.increaseQuantity.bind(this)}
                        // method 2 call and define in the constructor
                        onClick={this.increaseQuantity}
                        // Method3 is to convert into arrow function and it will by default bind the values.
                        />
                    </div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='decrease'
                        className='action-icons'
                        src=''
                        onClick={this.decreaseQuantity}
                        />
                    </div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='delete'
                        className='action-icons'
                        src=''
                        onClick={this.delete}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;