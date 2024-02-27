import './App.css';
import Collection from './components/Browse-our-collection/Collection';
import Design from './components/Design-Dream/Design';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Manu from './components/manu-btn/Manu';
import Presents from './components/moooi-Presents/Presents';
import Podcast from './components/podcast/Podcast';
import Product from './components/Product-story/Productstory';
import Strategy from './components/Strategy/Strategy';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Manu />  
      <Collection />
      <Design />
      <Product />
      <Presents />
      <Strategy />
      <Podcast span={"PRODUCT STORY"} btnText={"Listen now!"} src={"/assets/images/phone.webp"}>
        Get inspired by our Design Dreams podcast
      </Podcast> 
      <Footer />
    </>
  );
}

export default App;
