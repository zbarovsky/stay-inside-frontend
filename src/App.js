import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'

function App() {
  let [currentUser, setCurrentUser] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    let token
    if (localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  // setting current user
  let nowCurrentUser = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  // logging out current user
  let handleLogout = () => {
    if (localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="react-router-logic">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route path='/login' render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} /> } /> 
          <Route path='/about' component={ About } />
          <Route path='/' component={ Welcome } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
