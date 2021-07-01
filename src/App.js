import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Gituser from './components/gitusers/Gituser';
// import Cart from './components/shoppingcart/Cart';
import Home from './components/home/Home';
import Profile from './components/profile/profile';
import Summary from './components/summary/Summary'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/header/Navbar1';
import Errorpage from './components/Errorpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
 const App = () => {
  return (
    <>
    {/* <Cart />
<Gituser /> */}
<Router>
<Navbar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/profile' component={Profile} />
    <Route  exact path='/summary' component={Summary} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Route >
      <Errorpage />
    </Route>
  </Switch>
</Router>

    </>
  )
}
export default App;

