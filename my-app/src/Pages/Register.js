import { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("danger");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("hello");
  const navigate=useNavigate();

  const onsubmitHandler = (e) => {
    e.preventDefault();
    setUser({
      name,
      username,
      email,
      password,
    });
    setCheck(true);
  };
  useEffect(() => {
    if (check) {
      axios.post("http://localhost:5000/register",{user}).then((res)=>{
        console.log(res.data)
        setAlert("show")
        setStatus(res.data.status)
        setMessage(res.data.message);
        if(res.data.status==="success"){
          setTimeout(() => {
            navigate("/login")
          }, 1000);
        }
      }).catch((err)=>{
        console.log("error here register page")
      })
    }
  }, [check,navigate,user]);

  return (
    <section style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
      <div
          className={`alert alert-${status} fade  ${alert} w-50`}
          role="alert"
        >
          {message}
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: " 1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: " 1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form className="fw-semibold" onSubmit={onsubmitHandler}>
                      <div className="d-flex align-items-center mb-3 pb-1 ">
                        <i
                          className="bi bi-boxes me-3 fs-1"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">QUIZ</span>
                      </div>

                      <h5
                        className="fw-normal mb-2 pb-3"
                        style={{ letterSpacing: " 1px" }}
                      >
                        Create your account
                      </h5>
                      <div className="form-outline mb-2 ">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Name
                        </label>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Username
                        </label>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: " #393f81" }}>
                        Already have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Login here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
