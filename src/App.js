
import './App.css';
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills} from "./components/About";
import { Skills2 } from "./components/academics";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
   <>
     <Preloader load={load} />
     
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Skills2 />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
