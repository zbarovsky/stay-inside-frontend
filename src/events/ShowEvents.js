import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewComment from '../comments/NewComment'
import ShowComment from '../comments/ShowComment'
import DeleteEvent from '../events/DeleteEvent'

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
            {event.title} =
            {event.description}
            <div>
              <ShowComment /> 
              <NewComment user={props.user} id={event._id}/>
              <DeleteEvent id={event._id}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}