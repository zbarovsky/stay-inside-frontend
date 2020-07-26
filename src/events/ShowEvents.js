import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewComment from '../comments/NewComment'

export default function ShowEvents() {
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
          </li>
        ))}
      </ul>
      <div>
        <NewComment />
      </div>
    </div>
  )
}