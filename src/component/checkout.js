import "./checkout.css";
import tag from "./../assets/svg/tag.svg";
import logogray from "./../assets/svg/logogray.svg";

function Checkout() {
  return (
    <main className="checkout_container">
      <section className="col_md_6">
        <div className="row1_h_100">
          <div className="row1_container_img">
            <img src={tag} alt="tag" className="row1_img" />
          </div>
          <div className="row1_h3_p_p">
            <h3 className="row1_h3">See our pricing</h3>
            <p className="row1_p1">
              Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made
              for your organization.
            </p>
            <p className="row1_p2">
              <a className="row1_p2_btn" href="">
                Trello pricing
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="col_md_6">
        <div className="row1_h_100">
          <div className="row1_container_img">
            <img src={logogray} alt="logogray" className="row1_img" />
          </div>
          <div className="row2_h3_p_p">
            <h3 className="row1_h3">Take a Trello tour</h3>
            <p className="row2_p1">
              Explore the world of boards and beyond in Trello. Dive deeper into
              our most popular features.
            </p>
            <p className="row1_p2">
              <a className="row2_p2_btn" href="">
                Tour Trello
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Checkout;
