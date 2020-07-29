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
          console.log('🔥🔥🔥🔥')
          console.log(err)
        })
        console.log('call the server for bounties!')
      }, [])
    
  return (
    <div className="event1">
      <ul>
        {events.map((event, i) => (
          <li>
            <Card className="mb-2">
              <Card.Body className="card-style">
                <DeleteEvent id={event._id}/>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Link</Card.Subtitle>
                <Card.Text>
                  {event.date}
                    <br/>
                    {event.time}
                    <br/>
                    {event.description}
                </Card.Text>
                <ShowComment id={event._id} /> 
                <NewComment user={props.user} id={event._id} />
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}