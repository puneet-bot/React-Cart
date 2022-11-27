import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore, doc, onSnapshot  } from 'firebase/firestore';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
}

async componentDidMount(){
    // const querySnapshot = await getDocs(collection(getFirestore(), "Products"));
    // const products=querySnapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    // })
    // this.setState({
    //     products,
    //     loading:false
    // })

    const unsubscribe = onSnapshot(
        collection(getFirestore(), "Products"), 
        async (snapshot) => {
          // ...
          console.log('snapshot: ',snapshot);
          const products1=await snapshot.docs.map((doc)=>{
                const data=doc.data();
                data['id']=doc.id;
                return data;
            })
            console.log(products1);
            this.setState({
                products:products1,
                loading:false
            })
        },
        (error) => {
          // ...
          console.log('error: ',error);

        });

}


handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].Quantity+=1;
    this.setState({
        products
    })
}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].Quantity===0){
        return;
    }
        products[index].Quantity-=1;
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
        count+=prod.Quantity;
    })
    return count;
}
getCartTotal=()=>{
    let cartTotal=0;
    const {products}=this.state;
    products.map((prod)=>{
        cartTotal+=prod.Quantity*prod.Price;
        return '';
    })
    return cartTotal;
}
render(){
  const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount} />
      <Cart 
      products={products}
      increaseQuantity={this.handleIncreaseQuantity} 
      decreaseQuantity={this.handleDecreaseQuantity}
       onDelete={this.handleDelete} 
      />
      {loading && <h1>Loading Products...</h1>}
      <div>Total: {this.getCartCount}</div>
      <div>Grand Total: {this.getCartTotal}</div>
    </div>
  );
}
}

export default App;
