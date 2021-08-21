import './App.css';
import Router from "./Router";
import {  Container } from '@material-ui/core';
// import Header from "./components/Header"

const express = require("express")

require('./models/db')

function App() {
  return (
    <div className="Pink-App" >
      <Container>
        <Router />
        {/* <Header /> */}
        
      </Container>
    </div>
  );
}
export default App;
