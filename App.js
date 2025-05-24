import './App.css';
import { Route ,Routes } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Gallary from './component/Gallary';
import Contact from './component/Contact';
import Other from './component/Other';
import Navbar from './component/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/gallary' element ={<Gallary/>}/>
      <Route path='/gallary/2017' element ={<Gallary/>}/>
      <Route path='/gallary/2018' element ={<Gallary/>}/>
      <Route path='/gallary/2019' element ={<Gallary/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/other' element ={<Other/>}/>
    </Routes>
    </>
  );
}

export default App;
