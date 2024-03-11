import React from 'react'
import "./BuyPro.css"
const BuyPro = ({ src, title, price}) => {
  return (
    <section id='BuyProduct'>
        <div className="BuyDetail">
            <div className="BuyImg">
                <img src={src} alt="" />
            </div>
            <div className="Product-info">
                <h2>{title}</h2>
                <span className='buyprice'>{price}</span>
                <span>In Stock</span>
            </div>
            <div className="buyButton">
                <button>Buy</button>
            </div>
        </div>
        <div className="productView">
            <img src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBath%2FBathrobe%2Fimage-thumb__64219__header_fullscreen_2x_jpg%2FDodo-Pavone-Bathrobe_White_UV_UV-10_Topshot.webp&w=1080&q=80" alt="" />
        </div>
    </section>
  )
}

export default BuyPro
