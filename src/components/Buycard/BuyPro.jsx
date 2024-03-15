import React from 'react'
import "./BuyPro.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/features/cart/cartSlice';
const BuyPro = ({ src, title, price}) => {
    const dispatch = useDispatch();
    const addHandle=(item)=>{
        dispatch(addToCart(item));
    }
  return (
    <section id='BuyProduct'>
        <div className="BuyDetail">
           <div className='BuyProDetail'>
           <div className="BuyImg">
                <img src={src} alt="" />
            </div>
            <div className="Product-info">
                <h2>{title}</h2>
                <span className='buyprice'>{price}</span>
                <span>In Stock</span>
            </div>
            <div className="buyButton">
                <button onClick={()=>addHandle({img:src,name:title,price:price.slice(1),quantity:1,subTotal:0})}>Buy</button>
            </div>
           </div>
            <div className="productView">
            <img src={src} alt="Product Dimentions" />
        </div>
        </div>
        
    </section>
  )
}

export default BuyPro
