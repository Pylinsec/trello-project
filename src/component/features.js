import "./features.css";
import view from "./../assets/svg/view.svg";
import cardback from "./../assets/svg/cardback.svg";
import automation from ".//../assets/images/png/automation.png";
import powerups from ".//../assets/images/png/powerups.png";

function Features() {
  function Expand(item) {
    if (item === "none") {
      item = "block";
    }
  }
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
          <div className="row2_expand">
            <h3 className="row2_expand_h3">
              +<a className="row2_expand_h3_a">Learn more</a>
            </h3>
            <div id="row2_expand_p_ul">
              <p>
                You and your team can start up a Trello board in seconds. With
                the ability to view board data from many different angles, the
                entire team stays up-to-date in the way that suits them best:
              </p>
              <ul>
                <li>Use a Timeline view for project planning</li>
                <li>Calendar helps with time management</li>
                <li>Table view connects work across boards</li>
                <li>See board stats with Dashboard, and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row3">
        <div className="row3_container_img">
          <img className="row3_img" src={cardback} alt="image" />
        </div>
        <div className="row3_container_h5_h2_p">
          <div className="row3_h5_h2_p">
            <h5 className="row3_h5">Dive into the details</h5>
            <h2 className="row3_h2">Cards contain everything you need</h2>
            <p className="row3_p">
              Trello cards are your portal to more organized work—where every
              single part of your task can be managed, tracked, and shared with
              teammates. Open any card to uncover an ecosystem of checklists,
              due dates, attachments, conversations, and more.
            </p>
            <div className="">
              <h3 className="row3_h3">
                +<a>Learn more</a>
              </h3>
              <div className="row3_expand">
                <p>
                  Spin up a Trello card with a click, then uncover everything it
                  can hold. Break down bigger card tasks into steps with file
                  attachment previews, reminders, checklists and comments—emoji
                  reactions included! Plus, gain powerful perspective by seeing
                  all cards by list and status at the board level.
                </p>
                <p>Your team can:</p>
                <ul>
                  <li>Manage deadlines</li> <li>Provide and track feedback</li>
                  <li>Assign tasks and hand off work</li>
                  <li>Connect work across apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row4">
        <div class="row4_container_img">
          <img src={automation} className="row4_img" />
        </div>
        <div className="row4_h5_h2_p">
          <h5 className="row4_h5">Meet your new Butler</h5>
          <h2 className="row4_h2">No-code automation</h2>
          <p className="row4_p">
            Let the robots do the work—so your team can focus on work that
            matters. With Trello’s built-in automation, Butler, reduce the
            number of tedious tasks (and clicks) on your project board by
            harnessing the power of automation across your entire team.
          </p>
          <div className="expand">
            <h3 className="row4_h3">
              +<a>Learn more</a>
            </h3>
            <div className="row4_expand">
              <p>
                Butler uses natural language commands to automate just about any
                task in Trello:
              </p>
              <ul>
                <li>Automate common actions like moving lists</li>
                <li>Create custom buttons to build process quickly</li>
                <li>Surface upcoming deadlines to the team</li>
                <li>Schedule teammate assignments, and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="row3_container_img">
          <img className="row3_img" src={powerups} alt="image" />
        </div>
        <div className="row3_container_h5_h2_p">
          <div className="row3_h5_h2_p">
            <h5 className="row3_h5">Power-Ups</h5>
            <h2 className="row3_h2">Integrate top work tools</h2>
            <p className="row3_p">
              Easily connect the apps your team already uses into your Trello
              workflow, or add a Power-Up that helps fine-tune one specific
              need. With hundreds of Power-Ups available, your team’s workflow
              wishes are covered.
            </p>
            <div className="">
              <h3 className="row3_h3">
                +<a>Learn more</a>
              </h3>
              <div className="row3_expand">
                <p>
                  From Reporting to Custom Fields to your beloved software
                  integrations—we’ve got functionalities, your favorites, and
                  more!
                </p>
                <p>Such as:</p>
                <ul>
                  <li>Confluence</li> <li>Slack</li> <li>Dropbox</li>
                  <li>Google Drive</li> <li>Evernote</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
