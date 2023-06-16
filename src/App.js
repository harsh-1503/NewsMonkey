import logo from "./logo.svg";
import Navbar from "./components/Navbar";
// import NewsComponent from './components/NewsComponent';
import "./App.css";

import React, { Component } from "react";
import News from "./components/News";
import NewsComponent from "./components/NewsComponent";
// import Navbar from './components/Navbar';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LoginSignupComponent from "./components/Login/LoginSignupComponent";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<News key="" category="general" country="in"/>}/>
              <Route path="/general" element={<News key="general" category="general" country="in"/>}/>
              <Route path="/business" element={<News key="business" category="business" country="in"/>}/>
              <Route path="/entertainment" element={<News key="entertaiment" category="entertaiment" country="in"/>}/>
              <Route path="/health" element={<News  key="health"category="health" country="in"/>}/>
              <Route path="/science" element={<News  key="science"category="science" country="in"/>}/>
              <Route path="/sports" element={<News key="sports" category="sports" country="in"/>}/>
              <Route path="/technology" element={<News key="technology" category="technology" country="in"/>}/>
              <Route path="/login" element={<LoginSignupComponent/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
