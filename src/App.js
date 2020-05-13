import React from 'react';

import GlobalStyle from './components/Styled/Global';
import { Page } from './components/Styled/Containers';

import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Page>
        <Navbar />
        <Home /> 
        <Skills />
        <Projects />
        <About />
        <Contact />
      </Page>
      <GlobalStyle />
    </>
  )
}

export default App;
