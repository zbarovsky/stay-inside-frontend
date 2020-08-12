import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css'
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import CreateEvent from './events/CreateEvent'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const PrivateRoute = ({ component: Component, props, ...rest }) => {
  // get user via jwt token to confirm user authenticated
  const user = localStorage.getItem(`jwtToken`);
  // setup a return based on user status
  return <Route {...rest} render={(props) => (
      user ? <Component {...rest} {...props}/>
          : <Redirect to='/login' />
      )} 
  />
}

export default function App() {

  // set state values
  let [currentUser, setCurrentUser] = useState("")
  let [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    let token;
    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, [])

  console.log(currentUser)
  console.log("✨✨✨✨✨✨")
  let nowCurrentUser = (userData) => {
    console.log("oh hey this is even running")
    setCurrentUser(userData);
    setIsAuthenticated(true)
  }

  let handleLogout = () => {
    if(localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  console.log('Current User = ', currentUser);
  console.log('Authenticated = ', isAuthenticated);

  
    return (
      <div className="masterDiv">
         {/* is Authed/ isAuthenticated below */}
        <Navbar handleLogout={handleLogout} isAuthed={isAuthenticated} />
        <div className="container mt-5 content">
          <Switch>
            <Route path='/signup' component={ Signup } />
            <Route path='/login'  render={(props) =>   <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} /> } />
            <Route path='/about' exact component={ About } />
            <PrivateRoute path='/profile' component={ Profile } user={currentUser} />
            <PrivateRoute path='/' exact component={ Welcome } user={ currentUser } />
            <Route path='/events/create' render={ (props) => <CreateEvent {...props} user={ currentUser } /> } />
          </Switch>
        </div>
        <Footer />
      </div>
    )
}