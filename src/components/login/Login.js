import React, {useState} from "react";
import "./login.css";
import { NavLink, useHistory } from "react-router-dom";
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        const data = await res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            window.alert("Login Successfull");
            history.push('/');
        }

    }
  return (
    <>
      <section className="signup_bg">
        <div className="container mt-5 signup_main">
          <div className="row">
            <div className="col-10 col-md-6 signup_main_img2">
              <img src="./images/signup.svg" alt="" className="signup_img2" />
              <p>
                <NavLink to="/signup">Don't Have Account </NavLink>
              </p>
            </div>
            <div className="col-10 col-md-6">
              <h2 className="form-title">Log In</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-button mt-5">
                  <input
                    type="submit"
                    id="signin"
                    className="form_submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
