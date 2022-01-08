import "./features.css";
import view from "./../assets/svg/view.svg";
function Features() {
  return (
    <div className="features_container">
      <div className="features_row1">
        <div className="features_row1_container_left">
          <h2 className="features_row1_h2">
            Features to help your team succeed
          </h2>
          <p className="features_row1_p">
            Powering a productive team means using a powerful tool (and plenty
            of snacks). From meetings and projects to events and goal setting,
            Trello’s intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </p>
        </div>
      </div>
      <div className="row2">
        <div className="row2_image">
          <img src={view} alt="view" />
        </div>
        <div className="row2_col">
          <h5 className="row2_col_h5">Choose a view</h5>
          <h2 className="row2_col_h2">The board is just the beginning</h2>
          <p className="row2_col_p">
            Lists and cards are the building blocks of organizing work on a
            Trello board. Grow from there with task assignments, timelines,
            productivity metrics, calendars, and more.
          </p>
        </div>
      </div>

      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"></div>
    </div>
  );
}
export default Features;
