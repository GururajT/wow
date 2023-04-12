import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Menu from './components/Menu';
import Events from './components/Events';
import Chefs from './components/Chefs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Book from './components/Book';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Menu" element={<Menu/>}></Route>
          <Route exact path="/Header" element={<Header/>}></Route>
          <Route exact path="/Events" element={<Events/>}></Route>
          <Route exact path="/Chefs" element={<Chefs/>}></Route>
          <Route exact path="/Gallery" element={<Gallery/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/Book" element={<Book/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
