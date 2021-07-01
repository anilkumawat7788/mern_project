import React, { useState, useEffect } from "react";
import "./gitusers.css";
import Loading from './Loading';
const Gituser = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getappfun = async () => {
    try {
      
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setdata(data);
        console.log(data)
        setloading(false);
    } catch (err) {
      console.log("my error is " + err);
    }
  };

  useEffect(() => {
    getappfun();
  },[ ]);

  if(loading){
     return <Loading />
  }
  return (
    <>
      <div className="gituser container">
        <div className="row mt-2">
          {data.map((curElem) => {
            return (
              <div className="col-12 col-md-4 mx-auto mt-2"  key={curElem.id}>
                <div className="card">
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={curElem.avatar_url}
                        alt="user"
                        className="gitusers"
                      />
                    </div>
                    <div className="col-6">
                      <h1 className="pt-3">{curElem.login}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Gituser;
