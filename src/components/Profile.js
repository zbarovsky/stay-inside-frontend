import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
  const[myEvents, setMyEvents] = useState([])
  let myEventList

  // useEffect(() => {
  //   axios.get('http://localhost:3000/users/profile')
  //     .then(response => {
  //       if (response.status === 200) {
  //         setMyEvents(response.data)
  //       } 
  //       // else {
  //       //   return (
  //       //     <h3>You Don't Have Any Events Yet</h3>
  //       //   )
  //       // }
  //     }).catch(err => {
  //       console.log("🔥🔥🔥🔥🔥")
  //       console.log(err.message)
  //     })
  // })

  // if (myEvents.length < 1) {
  //   myEventList = "You don't have any events yet"
  // } else {
  //   myEvents.map((event, i) => {}
  //   )
  // }

  console.log(props)
  console.log(`${props.user}`)
  let userData = props.user
    ? <div>
        <h1>Profile</h1>
          <img src={props.user.avatar} alt={props.user.name} className="mb-4" />
          <p><strong>Name:</strong> {props.user.name}</p>
          <p><strong>email:</strong> {props.user.email}</p>
          <p><strong>ID:</strong> {props.user.id}</p>
      </div>
    : <h4>Loading...</h4>

  let errorDiv = () => {
    return (
      <div className="text-center pt-4"><h3>Please <Link to='/login'>login</Link> to view this page</h3></div>
    )
  }

  return (
    <div>
      {props.user ? userData : errorDiv() }
      
    </div>
  )
}

export default Profile;