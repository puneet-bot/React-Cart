import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
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
getCartCount=()=>{
    let count=0;
    const {products}=this.state;
    products.forEach((prod)=>{
        count+=prod.qty;
    })
    console.log(count);
    return count;
}
getCartTotal=()=>{
    let cartTotal=0;
    const {product}=this.state;
    product.map((prod)=>{
        cartTotal+=prod.qty*prod.price;
    })
    return cartTotal;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount} />
      <Cart 
      products={products}
      increaseQuantity={this.handleIncreaseQuantity} 
      decreaseQuantity={this.handleDecreaseQuantity}
       onDelete={this.handleDelete} 
      />
      <div>Total: {this.getCartCount()}</div>
    </div>
  );
}
}

export default App;
