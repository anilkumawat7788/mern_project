import React,{useState} from "react";
import "./signup.css";
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", Password: "", cPassword: ""
    });

  

    let name, value;
    const handleInput = (e) => {
    name= e.target.name;
    value = e.target.value;

console.log(e.target.value);
setUser({...user, [name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, Password,cPassword} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, Password, cPassword
            })
        });
        const data = await res.json();
        if(res.status === 422 || !data) {
window.alert("Invalid Registration");
console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successful");
console.log("Registration Successful");
history.push('/login');
        }
       
    }
  return (
    <>
   
      <section className="signup_bg">
        <div className="container mt-5 signup_main">
          <div className="row">
            <div className="col-10 col-md-6">
              <h2 className="form-title">Sign Up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>
              
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="number"
                    placeholder="phone"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="work"></label>
                  <input
                    id="work"
                    name="work"
                    type="text"
                    placeholder="Your Work (eg. web developer)"
                    value={user.work}
                    onChange={handleInput}
                  />
                  {/* <p className="help-block">E.g. dd/mm/yyyy</p> */}
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="password"
                    placeholder=" Confirm Password"
                    id="cpassword"
                    name="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group form-button">
                <input onClick={postData}  id="signup" className="form_submit" value="Sign Up"/>

                </div>
              </form>

            </div>
            <div className="col-10 col-md-6 signup_main_img">
              <img src="./images/signup.svg" alt="" className="signup_img" />
              <p><NavLink to='/login'>I am Already Register </NavLink></p>

            </div>
          </div>
        </div>
      </section>
      {/* <div>
          {
newuser.map((curElem) => {
    return(
        <div>
        <p>{curElem.name}</p>
        <p>{curElem.email}</p>
        </div>
       
    )

})
          }
      </div> */}
    </>
  );
};
export default Signup;
