import  { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar';
import About from '../src/components/about';
import Hero from '../src/components/hero';

import Faq from '../src/components/faq';
import Info from '../src/components/info';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Services from '../src/components/Services';
import Infocall from './components/infocall';

import Allfaq from './components/allfaq';









function App() {
  useEffect(()=>{
    document.title="casa deutsch"
  },[])
  return (
 <>
 <Navbar/>
 <Hero/>
<Services/>
    <About/>
    <Info/>
    <Allfaq/>
    <Contact/>
    <Infocall/>
    <Footer/>
 </>
  );
}

export default App;
