import React from 'react'
import {NavLink} from 'react-router-dom';
const Errorpage = () => {
  
    return (
        <>
           <div id="notfound">
           <div className="notfound">
               <h1>page not found</h1>
           </div>
           <NavLink to="/"> Back to Homepage</NavLink>


           </div> 
        </>
    )
}
export default Errorpage;
