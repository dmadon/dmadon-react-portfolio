import React,{useState} from 'react';
import Nav from './components/Nav'

function App() {

  const [navOptions] = useState(['About Me','Portfolio','Contact','Resume']);

  const [currentOption, setCurrentOption] = useState(navOptions[0]);

  return (
    <div className="App">

      <Nav 
        navOptions = {navOptions}
        currentOption = {currentOption}
        setCurrentOption = {setCurrentOption}      
      />

    </div>
  );
}

export default App;
