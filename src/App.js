
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './component/HeaderComponent/Header';
//import Nav from './component/NavComponent/Nav';
import Aside from './component/AsideComponent/Aside';
import Home from './component/HomeCompnent/Home';
import About from './component/AboutComponent/About';
import Contact from './component/ContactComponent/Contact';
import Service from './component/ServiceComponent/Service';
import Login from './component/LoginComponent/Login';
import Register from './component/RegisterCompnent/Register';
import Footer from './component/FooterComponent/Footer';

const App = () => {

  return (
    <div  id='container'>
      <Header/>
      
      <div id='main'>
      <Aside/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

