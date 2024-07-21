import React, { useRef } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Extra from './Components/Extra/Extra';
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from './Components/Value/Value';
import Contact from "./Components/Contact/Contact";
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  const residenciesRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  const getStartedRef = useRef(null);

  return (
    <div className="App">
      <div>
        <Header
          sections={{
            residenciesRef,
            valueRef,
            contactRef,
            getStartedRef
          }}
        />
        <Extra />
      </div>
      <Companies />
      <div ref={residenciesRef}>
        <Residencies />
      </div>
      <div ref={valueRef}>
        <Value />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={getStartedRef}>
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
}

export default App;
