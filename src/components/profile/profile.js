import React from 'react'
import './profile.css'
import Editprofile from "./EditProfile";
const Profile = () => {
    return (
        <>
          <div className="container emp-profile">
              <form method="">
                  <div className="row">
                      <div className="col-md-4">
                          {/* <img src="./images/user.jpeg" alt="" className="user_profile"/> */}
                          <Editprofile />
                      </div>
                      <div className="col-md-6">
                          <div className="profile-head">
                              <h5>Anil kumawat</h5>
                              <h6>web developer</h6>
                              {/* <p className="profile-rating mt-3 mb-5">RANKING</p> */}
                              <h1>About customer</h1>
                              {/* <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab"  href="#home" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab"  href="#profile" role="tab">Timeline</a>
                                </li>       
                            </ul> */}
                          </div>
                      </div>
                      <div className="col-md-2">
                          {/* <input type="submit" className="profile-edit btn" value="Edit Profile" name="btnAddMore" /> */}
                      </div>
                  </div>
                  <div className="row pt-3">
                      <div className="col-md-4">
                          <div className="profile-work">
                              <p>Work Links</p>
                              <a href="www.google.com">Facebook</a><br />
                              <a href="www.google.com">Youtube</a><br />
                              <a href="www.google.com">Twitter</a><br />
                              <a href="www.google.com">Facebook</a><br />
                          </div>
                      </div>
                      <div className="col-md-8 pl-5 about-info">
                      <div className="tab-content profile-tab" id="home" role="tabpanel" aria-label="">
                          <div className="row">
                              <div className="col-md-6">
                                  <label >User Id</label>
                              </div>
                              <div className="col-md-6">
                                <p>762736427287</p>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <div className="col-md-6">
                                  <label >Name</label>
                              </div>
                              <div className="col-md-6">
                                <p>ANil kumawat</p>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <div className="col-md-6">
                                  <label >Email</label>
                              </div>
                              <div className="col-md-6">
                                <p>anil@gnmail.com</p>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <div className="col-md-6">
                                  <label >Mobile</label>
                              </div>
                              <div className="col-md-6">
                                <p>8892451747</p>
                              </div>
                          </div>
                      </div>

                      </div>
                  </div>
              </form>
          </div>
        </>
    )
}
export default Profile;