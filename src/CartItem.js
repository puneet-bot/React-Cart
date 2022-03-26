import React from 'react';

class CartItem extends React.Component{
    
    
    // increaseQuantity=()=>{
    //     //Methpd 1 shallow copying
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // })
    //     //Method 2 is used when we want to use the value of previous state as in this scenario
    //     this.setState((prev)=>{
    //         return {
    //             qty:prev.qty+1
    //         }
    //     })
    // }
    // decreaseQuantity=()=>{
    //     this.setState((prev)=>{
    //         if(prev.qty==1){
    //             return;
    //         }
    //         return {
    //             qty:prev.qty-1
    //         }
    //     })
    // }
    // delete=()=>{
    //     console.log('test',this)
    // }
    render(){

        const {qty,price,title,image,id}=this.props.products;
        const {products,increaseQuantity,decreaseQuantity,onDelete}=this.props;
        // console.log(this.props.products)
        return (
            <div className='cart-item'>
                {/* {this.props.jsx} */}
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
                        onClick={() => increaseQuantity(products)}
                        // Method3 is to convert into arrow function and it will by default bind the values.
                        />
                    </div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='decrease'
                        className='action-icons'
                        src=''
                        onClick={() => decreaseQuantity(products)}
                        />
                    </div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='delete'
                        className='action-icons'
                        src=''
                        onClick={() => onDelete(id)}
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