import "./checkout.css";
import tag from "./../assets/svg/tag.svg";

function Checkout() {
  return (
    <main className="checkout_container">
      <section className="col_md_6">
        <div className="row_h_100">
          <div className="row_container_img">
            <img src={tag} alt="tag" className="row_img" />
          </div>
          <div className="row_h3_p_p">
            <h3 className="row_h3">See our pricing</h3>
            <p className="row_p1">
              Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made
              for your organization.
            </p>
            <p className="row_p2">
              <a className="row_p2_btn" href="">
                Trello pricing
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="col_md_6"></section>
    </main>
  );
}
export default Checkout;
