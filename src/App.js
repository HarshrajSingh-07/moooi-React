import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Browse-our-collection/Collection";
import Design from "./components/Design-Dream/Design";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Menu from "./components/menu-btn/Menu";
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
import Contact from "./components/Contact/Contact.jsx";
import MenuBar from "./components/MenuBar/MenuBar.jsx";

function App() {
  const[loggedIn,setLoggedIn]=useState(false)
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [urlMain, setUrlMain] = useState("");
  const [open, setOpen] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState(null);

  const handleOpen = (msg) => {
    setOpen(true);
    setSuccessMsg(msg);
  };
  const handleClose = (msg) => {
    setOpen(false);
    setSuccessMsg(msg);
  };
  function handleShow() {
    setMenu(!menu);
    setShowLogin(false);
    setShowSignup(false);
  }
  function handleLogin(){
    setShowLogin(true);
    setShowSignup(false);
    setMenu(false);
  }
  function handleSignup(){
    setShowSignup(true);
    setShowLogin(false);
    setMenu(false);
  }
  const handleContactClick = () => {
    setMenu(false); 
  };
  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const decodedPathname = decodeURIComponent(parsedUrl.pathname);
    const categoryPath = decodedPathname.split("/").slice(1, 3).join("/");  
    console.log(categoryPath);
  });

  return (
    <> {menu && <MenuBar handleLogin={handleLogin} handleSignup={handleSignup} handleContactClick={handleContactClick}/>}
    {showLogin && <Login handleSignup={handleSignup} handleOpen={handleOpen} open={open} handleClose={handleClose}
    />}
    {showSignup && <Signup handleLogin={handleLogin} handleOpen={handleOpen} open={open} handleClose={handleClose}/>}
      <ScrollToTop>
        <Routes>
        <Route path="/contact" element={
          <>
            <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Contact/>
                <Menu handleShow={handleShow} />
                <Footer />
          </>
        } />
          <Route
            path="/collection"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/"}
                  cardItem={AllCollection}
                  obj={collectionhead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/Bedding & Bath"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/collection"}
                  cardItem={BeddingBath}
                  obj={BeddingBathhead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path={`/productdetails/:id1/:id`}
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <ProductDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/Furniture"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/Bedding & Bath"}
                  cardItem={Furniture}
                  obj={Furnitureobj}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />

          <Route
            path="/Lighting"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/Furniture"}
                  cardItem={Lighting}
                  obj={LightingHead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />

          <Route
            path="/Home Accessories"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/Lighting"}
                  cardItem={HomeAccessories}
                  obj={HomeAccessoriesHead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />

          <Route
            path="/Wall & Floor"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/Furniture"}
                  cardItem={WallFloor}
                  obj={WallFloorHead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />

          <Route
            path="/Body & Beauty"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <Items
                  link={"/Furniture"}
                  cardItem={BodyBeauty}
                  obj={BodyBeautyHead}
                />
                <Menu handleShow={handleShow} />
                <Footer />
              </>
            }
          />
          <Route
            path="/ordersummary"
            element={
              <>
                <Header
                  Textcolor={"#000"}
                  backgroundColor={"#fff"}
                  leftHeader={"none"}
                  CenterHead={"start"}
                />
                <OrderSummary />
                <Menu handleShow={handleShow} />
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
                <Menu handleShow={handleShow} />
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
