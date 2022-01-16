import "./customer.css";
import ebay from "./../assets/svg/ebay.svg";
import blockquote from "./../assets/svg/blockquote.svg";
import egencia from "./../assets/svg/egencia.svg";
import wings from "./../assets/svg/wings.svg";
import nextnext from "./../assets/svg/nextnext.svg";

function Customer() {
  return (
    <main className="customer_container" data-show="3">
      <div className="customer_frame">
        <div className="track">
          <div className="customer_row1">
            <div className="customer_col-md-3">
              <div className="customer_container_img_ebay">
                <img src={ebay} alt="ebay" width={192} height={80} />
              </div>
              <div className="customer_container_h5_h3">
                <h5 className="customer_h5">Industry</h5>
                <h3 className="customer_m-0">eCommerce</h3>
              </div>
            </div>
            <div className="customer_col-md-9">
              <blockquote className="customer_blockquote">
                <img src={blockquote} width={34} height={25} alt="blockquoto" />
                <br />
                Everyone loves it; it has democratized our finance function. In
                some ways Trello shattered hierarchy and brought us together.
              </blockquote>
              <footer className="customer_footer">
                <span className="customer_span">
                  <h5 className="customer_m-1">Bharath Sundar</h5> Finance, eBay
                </span>
              </footer>
            </div>
          </div>
          <div className="customer_row2">
            <div className="customer_col-md-3">
              <div className="customer_container_img_egencia">Egencia</div>
              <div className="customer_container_h5_h3">
                <h5>Industry</h5>
                <h3 className="customer_m-0">Travel</h3>
              </div>
            </div>
            <div className="customer_col-md-9">
              <blockquote className="customer_lockquote">
                <img src={blockquote} /> Very simple to use, great automation
                and keeps me on track with all I need to do. I also like that it
                can be shared with others.
              </blockquote>
              <footer className="customer_footer">
                <span>
                  <h5 className="customer_m-0">Kerry Parker-Evans</h5> IT
                  Project Manager, Egencia
                </span>
              </footer>
            </div>
          </div>
          <div className="customer_row3">
            <div className="customer_col-md-3">
              <div className="customer_container_img_wings">
                Detroit Red Wings
              </div>
              <div className="customer_container_h5_h3">
                <h5>Industry</h5>
                <h3 className="customer_m-0">Sport</h3>
              </div>
            </div>
            <div className="customer_col-md-9">
              <blockquote className="customer_blockquote">
                <img src={blockquote} alt="customer_blockquote" /> Trello makes
                it easy to keep everyone on the same page. As changes happen,
                the real-time updates with email notifications have been key.
              </blockquote>
              <footer className="customer_footer">
                <span>
                  <h5 className="customer_m-0">Haydon Dotson</h5> Sales Manager,
                  Detroit Red Wings
                </span>
              </footer>
            </div>
          </div>
          <div className="customer_row4">
            <div className="customer_col-md-3">
              <div className="customer_container_img_sproutsocia">
                Sprout Social
              </div>
              <div className="customer_cintainer_h5_h3">
                <h5>Industry</h5>
                <h3 className="customer_m-0">Marketing</h3>
              </div>
            </div>
            <div className="customer_col-md-9">
              <blockquote className="text-center text-md-left pl-md-5 pt-md-4">
                <img src={blockquote} alt="blockquote" />
                Now that we've switched to a remote environment, with the use of
                Trello, we can now limit the number of meetings we have
                regarding specific projects and turn to Trello for updates
                instead.
              </blockquote>
              <footer className="customer_footer">
                <span>
                  <h5 className="customer_m-0">Haley Ennes</h5> HR Manager,
                  Sprout Social
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <ul className="customer_list">
        <li className="customer_arrow" data-direction="back">
          <svg></svg>
        </li>
        <li className="dot" data-goto="0"></li>
        <li className="dot" data-goto="1"></li>
        <li className="dot" data-goto="2"></li>
        <li className="dot" data-goto="3"></li>
        <li className="customer_arrow" data-direction="next">
          <svg></svg>
        </li>
      </ul>
    </main>
  );
}
export default Customer;
