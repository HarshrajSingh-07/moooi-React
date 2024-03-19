import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Browse-our-collection/Collection";
import Design from "./components/Design-Dream/Design";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Manu from "./components/manu-btn/Manu";
import Presents from "./components/moooi-Presents/Presents";
import Podcast from "./components/podcast/Podcast";
import Product from "./components/Product-story/Productstory";
import Strategy from "./components/Strategy/Strategy";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup.jsx";
import Items from "./components/Items/Items";
import { BeddingBath, BeddingBathhead } from "./components/Items/itemData1";
import { Furniture, Furnitureobj } from "./components/Items/itemData2";
import { Lighting, LightingHead } from "./components/Items/ItemData3.js";
import {
  HomeAccessories,
  HomeAccessoriesHead,
} from "./components/Items/ItemData4.js";
import { WallFloor, WallFloorHead } from "./components/Items/ItemData5.js";
import { BodyBeauty, BodyBeautyHead } from "./components/Items/ItemData6.js";
import {
  AllCollection,
  collectionhead,
} from "./components/Items/AllCollection.js";
import ProductDetail from "./components/Product-Detail/ProductDetail";
import ScrollToTop from "./ScrollToTop.jsx";
import OrderSummary from "./components/Order summary/OrderSummary.jsx";

function App() {
  const [show, setShow] = useState(null);
  const [urlMain, setUrlMain] = useState("");
  function handleShow() {
    setShow("show");
  }
  function handleLogin() {
    setShow("login");
  }
  function handleSignup() {
    setShow("signup");
    console.log("signup");
  }
  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const decodedPathname = decodeURIComponent(parsedUrl.pathname);
    const categoryPath = decodedPathname.split("/").slice(1, 3).join("/");
    console.log(categoryPath);
  });

  return (
    <>
      <ScrollToTop>
        {show === "show" ? (
          <Login handleSignup={handleSignup} />
        ) : show === "login" ? (
          <Login handleSignup={handleSignup} />
        ) : show === "signup" ? (
          <Signup handleLogin={handleLogin} />
        ) : null}
        <Routes>
          <Route
            path="/collection"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/"}
                  cardItem={AllCollection}
                  obj={collectionhead}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/Bedding & Bath"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/collection"}
                  cardItem={BeddingBath}
                  obj={BeddingBathhead}
                />
                <Footer />
              </>
            }
          />
          <Route
            path={`/productdetails/:id1/:id`}
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <ProductDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/Furniture"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/Bedding & Bath"}
                  cardItem={Furniture}
                  obj={Furnitureobj}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/Lighting"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/Furniture"}
                  cardItem={Lighting}
                  obj={LightingHead}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/Home Accessories"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/Lighting"}
                  cardItem={HomeAccessories}
                  obj={HomeAccessoriesHead}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/Wall & Floor"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/Furniture"}
                  cardItem={WallFloor}
                  obj={WallFloorHead}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/Body & Beauty"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <Items
                  link={"/Furniture"}
                  cardItem={BodyBeauty}
                  obj={BodyBeautyHead}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/ordersummary"
            element={
              <>
                <Header Textcolor={'#000'} backgroundColor={'#fff'}/>
                <OrderSummary />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Manu handleShow={handleShow} />
                <Collection />
                <Design />
                <Product />
                <Presents />
                <Strategy />
                <Podcast
                  span={"PRODUCT STORY"}
                  btnText={"Listen now!"}
                  src={"/assets/images/phone.webp"}
                >
                  Get inspired by our Design Dreams podcast
                </Podcast>
                <Footer />
              </>
            }
          />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
