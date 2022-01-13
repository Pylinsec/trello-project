import "./signup.css";
function Signup() {
  return (
    <main className="signup_container">
      <div className="row">
        <div className="col-md-8">
          <h3 className="row_h3">
            Sign up and get started with Trello today. A world of productive
            teamwork awaits!
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <form className="form_input">
            <div className="input_container">
              <input
                name="email"
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export default Signup;
