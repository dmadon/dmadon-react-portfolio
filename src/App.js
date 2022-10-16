import React,{useState} from 'react';
import Nav from './components/Nav';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import {motion} from 'framer-motion';


function App() {

  const [navOptions] = useState(['About','Portfolio','Contact','Resume']);
  const [currentPage, setCurrentPage] = useState('About');

  const pageChanger = () => {
    if (currentPage === 'About'){
      return <About />
    }
    else if (currentPage === 'Portfolio'){
      return <Portfolio />
    }
    else if (currentPage === 'Contact'){
      return <Contact />
    }
    else if (currentPage === 'Resume'){
      return <Resume />
    }
  }


  return (
    <div className="App">

      
      
      <Nav 
        navOptions = {navOptions}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}      
      />



      {pageChanger()}
     
      
      <Footer />

    </div>
  );
}

export default App;
