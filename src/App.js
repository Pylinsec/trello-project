import "./App.css";
import React from "react";
import Hero from "./component/Hero";
import icon from "./assets/svg/icon.svg";
import Product from "./component/Product";
import Features from "./component/features.js";

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
      <section className="product">{Product()}</section>
      <section className="features">{Features()}</section>
    </main>
  );
}

export default App;
