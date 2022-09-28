import {useState} from 'react';
import './Cart.css'


function CartTwo(props){
    
    const [cartData, setCartData] = useState({cart: 0, products:[
        {
            id: 101,
            name: "Apples",
            quantity: 0
        },
        {
            id: 102,
            name: "kiwi",
            quantity: 0
        },
        {
            id: 103,
            name: "bannana",
            quantity: 0
        },
        {
            id: 104,
            name: "Promoganet",
            quantity: 0
        },
        {
            id: 105,
            name: "Oranges",
            quantity: 0
        }
    ]
});


return(
        <div className='cart'>
            {cartData.products.length !== 0? <div>
                <h2>Cart : {cartData.cart}</h2>
                  {/* <img src= {'./images'} alt="" ></img> */}
                  <img src= {'../images/cart.jpg'} alt="" className='img' ></img>   
                {cartData.products.map (item => {
                    return (<div>
                        <h3>{item.name} : {item.quantity}</h3> 
                        <button  onClick={()=>{increaseQuantity(item.id)}}>ADD</button>   
                        <button onClick={()=>{decreaseQuantity(item.id)}}>Remove</button>
                    </div>);
                } )}
            </div>:<h1>Product list is empty</h1>}
        </div>
    );

    
    function increaseQuantity(id){
        let newList = [...cartData.products];
        let newCart = cartData.cart;
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id){
                newList[i].quantity += 1;
                newCart += 1;
            }
        }
        setCartData({cart: newCart, products: newList});
    }

    
   function decreaseQuantity(id){
        let newList = [...cartData.products];
        let newCart = cartData.cart;
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id && newList[i].quantity>0){
                newList[i].quantity -= 1;
                newCart -= 1;
            }
        }
        setCartData({cart: newCart, products: newList});
    }
    
}

export default CartTwo;