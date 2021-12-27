import "./App.css";
import trello_logo from "./assets/images/trello_logo.svg";

function App() {
  return (
    <main className="container">
      <header className="header">
        <nav className="navbar">
          <a href="https://trello.com/" className="trello_logo">
            <img src={trello_logo} alt="trello logo" />
          </a>
          <div className="header_buttons_container">
            <button className="login_button">Log in</button>
            <button className="signup_button">Sign up</button>
          </div>
        </nav>
      </header>
      <section className="hero_box">
        <h1 className="hero_title">Trello helps teams move work forward.</h1>
        <div className="hero_description">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </div>
        <div className="signup_buttons_container">
          <input className="hero_email_input" />
          <button className="hero_signup_button">Sign up—it’s free!</button>
        </div>
        <div className="big_image"></div>
      </section>
    </main>
  );
}

export default App;
