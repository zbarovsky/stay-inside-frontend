import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewComment from '../comments/NewComment'
import ShowComment from '../comments/ShowComment'
import DeleteEvent from '../events/DeleteEvent'
import { Card } from 'react-bootstrap'

export default function ShowEvents(props) {
  let [events, setEvents] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/events', events)
    .then(response => {
        setEvents(response.data)
        console.log(response)
    })
    .catch(err => {
      console.log('☠️☠️☠️☠️☠️☠️')
      console.log(err)
    })
    console.log('call the server for bounties!')
  }, [])
     
  console.log(props.user)
    
  return (
    <ul>
      {events.map((event, i) => (
        <li key={i} className='event-container'>
          <Card>
            <Card.Header as="h5">
              <h2 className='event-title'>{event.title}</h2> 
              <DeleteEvent id={event._id}/>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {event.date}
                <br/>
                {event.time}
                <br/>
               <h5>{event.description}</h5> 
              </Card.Text>
              <ShowComment id={event._id} /> 
              <NewComment user={props.user} id={event._id} />
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  )
}

