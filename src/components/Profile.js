import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
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