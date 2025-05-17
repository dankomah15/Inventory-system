import Form from "./Components/Table";
import React from "react";
import logo from './assets/new.png'; 
import RegisterForm from "./Components/Form";
import Logo from "./Components/Logo";
import StockPurchase from "./Components/Purchase";
import Header from "./Components/Header";
import Footer from "./Components/Footer";




function App() {
  
  return (
    <>
    <div>
      <Logo image={logo}/>
      <RegisterForm image={logo}/>
      <Form image={logo} />
      <Header image={logo}/>
      <StockPurchase/>
      <Footer/>


    </div>
    </>
  );
}

export default App;