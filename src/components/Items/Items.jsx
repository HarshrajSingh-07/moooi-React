import React, {useEffect, useState } from "react";
import "./Item.css";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BsFilterRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Items = ({link, cardItem, obj }) => {
  // const [targetIndex, setTargetIndex] = useState(0);
  const [data,setData]=useState(cardItem);
  const [filter,setFilter]=useState(obj.btn[0]);
  useEffect(()=>{
    if( filter!==obj.btn[0]){
      const localData=cardItem.filter((element)=>{
        return element.category===filter
      })
      console.log(localData);
      setData(localData);
    }else{
      setData(cardItem)
    }  
  },[filter])
  const filterHandler=(val)=>{
    setFilter(val);
  }
  // const pageHandlerBtn = (e) => {
  //   filterHandler(e.target.value)
  //   const index = parseInt(e.target.value, 10);
  //   setTargetIndex(index);
  // };

  return (
    <section id="items">
      <div className="items-head">
        <div className="item-text">
          <h1>{obj.title}</h1>
          <p>
            Our collection contains work from emerging talent and
            internationally recognized designers. Together, we create A Life
            Extraordinary.
          </p>
        </div>
        <div className="itemsBtn">
          <Link to={link}>
            <button className="arow">
              <HiOutlineChevronLeft />
            </button>
          </Link>
          {obj.btn.map((item, index) => (<>
            {/* <Link to={`/${item.toLowerCase()}`} key={index}> */}
            <button
              key={index}
              className={item === filter ? "active" : null}
              value={item}
              onClick={(e) =>  filterHandler(e.target.value)}
            >
              {item}
            </button>
            {/* </Link> */}
            </>
          ))}
        </div>
        <div className="filterBtn">
          <button>
            <span>
              <BsFilterRight />
            </span>
            <p>Filters</p>
          </button>
        </div>
      </div>
   
      <div className="cards">
        {data.map((item, index) => (
          <Link key={index} to={`/productdetails/${item.type}/${index}`}>
            <div className="carditem">
              <div className="cartimg">
                <img src={item.src} alt={item.itemname} loading="lazy" />
              </div>
              <div className="cartText">
                <h4>
                  {item.itemname}
                  <strong className="strong">{item.brandName}</strong>
                </h4>
                <span className="availability">{item.price}</span>
                <span className="availability">{item.availability}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="suggestion">
        <h2>OUR SUGGESTION</h2>
        <p> Turn more dreams into reality. See more types of {obj.title}</p>
        <div className="suggesstionBtn">
          {obj.btn.map((item, index) => {
            return (
              <button
                key={index}
                value={item}

                className={item === filter ? "active" : null}
                onClick={(e) =>  filterHandler(e.target.value)}
              >
                {item}{" "}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Items;
