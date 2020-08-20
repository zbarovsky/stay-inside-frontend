import React, { useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import DeleteEvent from '../events/DeleteEvent'
import UpdateEvent from '../events/UpdateEvent'
import DropDownUpdateEvent from '../events/DropDownUpdateEvent'
import axios from 'axios';

const Profile = (props) => {

  // GET EVENTS
  let [events, setEvents] = useState([])
  // const [deleteEvent, setDelete] = useState(false)

  useEffect(()=>{
      axios.post(`${process.env.REACT_APP_API}/events`, {data: {events: events, user: props.user}})

      .then(response => {
          setEvents(response.data)
          console.log(response)
      })
      .catch(err => {
        console.log('🔥🔥🔥🔥')
        console.log(err)
      })
      console.log('call the server for bounties!')
    }, [])
  

  console.log("🦷🦷🦷🦷🦷🦷🦷🦷🦷")
  console.log(props.user)
  let userData = props.user
    ? <div>
        <h1>Profile</h1>
          <img src={props.user.avatar} alt={props.user.name} className="mb-4" />
          <p><strong>Name:</strong> {props.user.name}</p>
          <h5 className=''>Create a <Link to='/events/create'>New Event</Link></h5>
          <div className=''>
              <ul>
                {events.map((event, i) => (
                  <li className='profile-event-container'>
                    <Card className="shadow-lg p-0 mb-5 bg-white" >
                      <Card.Header className='profile-event-title  p-1'>
                        <h5 className='profile-event-h2 m-2'>{event.title}</h5>
                        <DeleteEvent id={event._id}/>
                      </Card.Header>
                      <Card.Body>  
                        <Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Card Link</Card.Subtitle>
                          {event.date}
                          <br/>
                          {event.time}
                          <br/>
                          {event.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Body className='card-body2'>
                        <DropDownUpdateEvent id={event._id}/>
                      </Card.Body>
                    </Card>
                  </li>
              ))}
            </ul>
          
        </div>
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