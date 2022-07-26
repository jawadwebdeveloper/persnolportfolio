// import logo from './assets/PIXDDDD/logonew.png';
import './App.css';
import Header from './Commponent/Header/Header';
import Nav from './Commponent/Navbar/Nav.jsx';
import About from './Commponent/About/About';
import Expireance from './Commponent/Expireance/Expireance.jsx';
import Services from './Commponent/Services/Services.jsx';
import Portfolio from './Commponent/Portfolio/Portfolio.jsx';
import Testmonial from './Commponent/Testmonial/Testmonial.jsx';
import Conntact from './Commponent/Conntact/Conntact.jsx';
import Footer from './Commponent/Footer/Footer.jsx';
import SoundBar from './Commponent/Sound/SoundBar';
import {Bounce, Zoom} from 'react-reveal';

function App() {
  return (
    <div className="App">
      <Bounce left>
        <SoundBar/>
      </Bounce>
      <Header/>
      <Nav/>
      <About/>
      <Expireance/>
      <Services/>
      <Portfolio/>
      <Zoom>
        <Testmonial/>
      </Zoom>
      <Conntact/>
      <Footer/>

    </div>
  );
}

export default App;
