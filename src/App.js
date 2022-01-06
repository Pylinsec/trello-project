import "./App.css";
import icon from "./assets/svg/icon.svg";
import google from "./assets/svg/google.svg";
import fender from "./assets/svg/fender.svg";
import costco from "./assets/svg/costco.svg";
import squarespace from "./assets/svg/squarespace.svg";
import hero from "./assets/images/png/hero.png";
import board from "./assets/images/png/board.png";

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
      <section className="hero_box">
        <div className="title_container">
          <h1 className="hero_box_title">
            Trello helps teams move work forward.
          </h1>
          <h3 className="hero_box_description">
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </h3>
          <div className="hero_box_signup_button_container">
            <div className="hero_box_email_input">
              <input placeholder="Email" className="email_input" />
            </div>
            <button className="hero_box_signup_button">
              Sign up—it&apos;s free!
            </button>
          </div>
        </div>
        <img src={hero} alt="trello logo" className="hero_image" />
      </section>
      <section className="product">
        <div className="product_container">
          <div className="row1">
            <h2 className="row1_h2">
              It’s more than work. It’s a way of working together.
            </h2>
            <p className="row1_p1">
              Start with a Trello board, lists, and cards. Customize and expand
              with more features as your teamwork grows. Manage projects,
              organize tasks, and build team spirit—all in one place.
            </p>
            <p className="row1_p2">
              <a href="/signup" className="row-btn">
                Start doing →
              </a>
            </p>
          </div>
          <div className="row2">
            <img src={board} className="row2_image" alt="Board view" />
          </div>
          <div className="row3">
            <p className="row3_p">
              Join over 1,000,000 teams worldwide that are using Trello to get
              more done.
            </p>
            <div className="row2_logos"></div>
            <img src={google} alt="google" />
            <img src={fender} alt="fender" />
            <img src={squarespace} alt="squrespace" />
            <img src={costco} alt="costco" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
