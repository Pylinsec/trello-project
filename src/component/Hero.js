import "./Hero.css";

import hero from "./../assets/images/png/hero.png";
function Hero() {
  return (
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
  );
}
export default Hero;
