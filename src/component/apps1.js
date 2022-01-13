import "./apps1.css";
import apple from "./../assets/svg/apple.svg";
import google from "./../assets/svg/google.svg";

function Apps1() {
  return (
    <div className="apps_container">
      <div className="row">
        <div className="col-lg-8">
          <p className="mb-2">
            Trello also works great on your smaller screen.
          </p>
        </div>
        <div className="show2">
          <div className="col-60 ">
            <a href="" target="_blank">
              <img
                src={apple}
                alt="Available on the App Store"
                className="w-100"
              />
            </a>
          </div>
          <div className="col-61">
            <a href="" target="_blank">
              <img src={google} alt="Get it on Google Play" className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Apps1;
