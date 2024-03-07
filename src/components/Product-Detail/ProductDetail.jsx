import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { GiMeepleCircle } from "react-icons/gi";
import { VscCircleSmall } from "react-icons/vsc";
import { BsCartCheckFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import {BeddingBath}  from "../Items/itemData1";
import { Furniture } from "../Items/itemData2";
import { Lighting } from "../Items/ItemData3";
import { HomeAccessories } from "../Items/ItemData4";
import { WallFloor } from "../Items/ItemData5";
import { BodyBeauty } from "../Items/ItemData6";

const ProductDetail = () => {
  const [data,setData]=useState([]);
  const [mydata,setMyData]=useState({})
  let { id,id1 } = useParams();
  console.log(id,id1);
  let files = [
    BeddingBath,
    Furniture,
    Lighting,
    HomeAccessories,
    WallFloor,
    BodyBeauty,
  ];

 useEffect(()=>{
   files.forEach((item, index) => {
      item.forEach((element, i) => {
        console.log(element.type);
        if(element.type===id1)
        {
          setData(item[id]);
        }
      });
    });
 
  // console.log(data);
},[id])
 
 
  // console.log("mydata",mydata)
  // console.log(mydata.src)
  console.log(id);
  return (
    <section id="productDetail">
      {/* <div className="productImg">
             
      </div> */}
    
      <div className="prodimg">
              <img src={data.src}></img>
      </div>

      <div className="productDetailHead">
        <h1 >{data.itemname}</h1>
        <span>MOOOI, 2021</span>
        <div className="varBtn">
        <br />
        <h2>{data.price}</h2><br />
                  <button>
                    <IoIosAdd className="cartIcon" /> 
                    <FiShoppingBag className="cartIcon" />
                  </button>

                </div>

        <div className="detailRow">
          <div className="detailLeft">
            <p>
              Clear your mind and opt for a fresh start every day with Defy
              Gravity. With rare ambergris, Australian sandalwood, seaweeds,
              driftwood and African buchu. The crisp marine notes in Defy
              Gravity brings …
            </p>
            <button className="detailBtn">Read more</button>
          </div>

          <div className="detailRight">
            <ul>
              <li>
                <LiaShippingFastSolid className="cart-icon"/>
                <span>Free Shipping</span>
              </li>
              <li>
                <TbTruckReturn className="cart-icon" />
                <span>Easy Returns Within 100 Days</span>
              </li>
              <li>
                <GiMeepleCircle className="cart-icon" />
                <span>5 Year Warranty after registration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="variants">
          <div className="leftVar">
            <div className="leftText">
              <h2>VARIANTS</h2>
              <p>Room Fragrance Defy Gravity is available in 2 models.</p>
              <div className="specs">
                <button>View 2 variants</button>
              </div>
            </div>
          </div>
          <div className="rightVar">
            <div className="var-item">
              <div className="var-img">
                <img
                  src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FCollection%2FHome-Fragrance%2FRoom%2520Fragrance%2520Defy%2520Gravity%2Froom-spray-defy-gravity-spray-V2.png&w=2048&q=80"
                  alt="variants"
                />
              </div>
              <div className="var-detail">
                <p className="variant-name">Room spray Defy Gravity 200ml,</p>
                <p>Multicolour</p>
                <span>$65</span>
                <div className="varientShip">
                  <FaShippingFast className="shipIcon" />
                  <span>ship in 2 day</span>
                </div>
                <div className="varBtn">
                  <button>
                    <IoIosAdd className="cartIcon" />
                    <FiShoppingBag className="cartIcon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="var-item">
              <div className="var-img">
                <img
                  src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Fassets%2FCollection%2FHome-Fragrance%2FRoom%2520Fragrance%2520Defy%2520Gravity%2Froom-spray-defy-gravity-reed-diffuser-V2.png&w=3840&q=80"
                  alt="variants"
                />
              </div>
              <div className="var-detail">
                <p className="variant-name">Room spray Defy Gravity 200ml,</p>
                <p>Multicolour</p>
                <span>$65</span>
                <div className="varientShip">
                  <FaShippingFast className="shipIcon" />
                  <span>ship in 2 day</span>
                </div>
                <div className="varBtn">
                  <button>
                    <IoIosAdd className="cartIcon" />
                    <FiShoppingBag className="cartIcon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="ourCommitments">
        <div className="commitments">
          <h2>Our Commitments to You</h2>
          <p>
            At Moooi, we prioritize your satisfaction and convenience. Explore
            our extensive range of customer-centric policies crafted to elevate
            your shopping experience:
          </p>
        </div>
        <div className="policies">
          <div className="policy">
            <LiaShippingFastSolid className="policy-icon" />
            <div className="innerpolicy">
              <h2>Free Shipping</h2>
              <p>Free Shipping on all orders over $100</p>
            </div>
          </div>
          <div className="policy">
            <TbTruckReturn className="policy-icon" />
            <div className="innerpolicy">
              <h2>Easy Returns Within 100 Days</h2>
              <p>
                If you're not in love with our product you may return within 100
                days of receipt without given reasons.
              </p>
            </div>
          </div>
          <div className="policy">
            <GiMeepleCircle className="policy-icon" />
            <div className="innerpolicy">
              <h2>5 Year Warranty after registration</h2>
              <p>
                All our lighting and furniture products come with The Button.
                Tap it to check authenticity and register your product to get
                extended warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
