import "./App.css";
import React from "react";
import Hero from "./component/Hero";
import icon from "./assets/svg/icon.svg";
import Product from "./component/Product";
import Features from "./component/features.js";
import Checkout from "./component/checkout";

function App() {
  return (
    <main className="container">
      <header className="header">
        <nav className="navbar">
          <img src={icon} alt="trello logo" className="trello_logo" />
          <div className="nav_buttons">
            <a href="/login" className="login_button">
              Log in
            </a>
            <a href="/signup" className="signup_button">
              Sign up
            </a>
          </div>
        </nav>
      </header>
      <div>{Hero()}</div>
      <section id="product">{Product()}</section>
      <section id="features">{Features()}</section>
      <section id="checkout">{Checkout()}</section>
    </main>
  );
}

export default App;
