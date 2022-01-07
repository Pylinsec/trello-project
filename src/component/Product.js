import "./Product.css";
import google from "./../assets/svg/google.svg";
import fender from "./../assets/svg/fender.svg";
import costco from "./../assets/svg/costco.svg";
import squarespace from "./../assets/svg/squarespace.svg";
import board from "./../assets/images/png/board.png";

function Product() {
  return (
    <div className="product_container">
      <div className="row1">
        <h2 className="row1_h2">
          It’s more than work. It’s a way of working together.
        </h2>
        <p className="row1_p1">
          Start with a Trello board, lists, and cards. Customize and expand with
          more features as your teamwork grows. Manage projects, organize tasks,
          and build team spirit—all in one place.
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
          Join over 1,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
        <div className="row3_logos">
          <img className="logos_google" src={google} alt="google" />
          <img className="logos_fender" src={fender} alt="fender" />
          <img
            className="logos_squrespace"
            src={squarespace}
            alt="squrespace"
          />
          <img className="logos_costco" src={costco} alt="costco" />
        </div>
      </div>
    </div>
  );
}
export default Product;
