import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewComment from '../comments/NewComment'
import ShowComment from '../comments/ShowComment'
import DeleteEvent from '../events/DeleteEvent'
import ListEvent from '../events/ListEvent'
import { Card } from 'react-bootstrap'

export default function ShowEvents(props) {
  let [events, setEvents] = useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}/events`, events)
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


  console.log("🎲")   
  console.log(props.user)
    
  return (
    <ul>
      {events.map((event, i) => (
        <li key={i} className='event-container'>
          <ListEvent event={event} user={props.user} />
        </li>   
      ))}
    </ul>
  )
}

