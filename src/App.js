import "./App.css";
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
import Signup from "./components/Signup/Signup";
import { useState } from "react";
import Items from "./components/Items/Items";
import { Route, Routes } from "react-router-dom";
import { BeddingBath,BeddingBathhead} from "./components/Items/itemData1";
import { Furniture , Furnitureobj} from "./components/Items/itemData2";
import { Lighting , LightingHead} from "./components/Items/ItemData3.js";
import { HomeAccessories , HomeAccessoriesHead} from "./components/Items/ItemData4.js";
import { WallFloor , WallFloorHead} from "./components/Items/ItemData5.js";
import { BodyBeauty , BodyBeautyHead} from "./components/Items/ItemData6.js";

function App() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      {show ? <Login /> : null}

      <Routes>
        <Route
          path="Bedding & Bath"
          element={
            <>
              <Header />
              <Items cardItem={BeddingBath} obj={BeddingBathhead} />
              <Footer />
            </>
          }
        />
        <Route
          path="Furniture"
          element={
            <>
              <Header />
              <Items cardItem={Furniture} obj={Furnitureobj} />
              <Footer />
            </>
          }
        />
        <Route
          path="Lighting"
          element={
            <>
              <Header />
              <Items cardItem={Lighting} obj={LightingHead} />
              <Footer />
            </>
          }
        />
        <Route
          path="Home Accessories"
          element={
            <>
              <Header />
              <Items cardItem={HomeAccessories} obj={HomeAccessoriesHead} />
              <Footer />
            </>
          }
        />
        <Route
          path="Wall & Floor"
          element={
            <>
              <Header />
              <Items cardItem={WallFloor} obj={WallFloorHead} />
              <Footer />
            </>
          }
        />
        <Route
          path="Body & Beauty"
          element={
            <>
              <Header />
              <Items cardItem={BodyBeauty} obj={BodyBeautyHead} />
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
    </>
  );
}

export default App;
