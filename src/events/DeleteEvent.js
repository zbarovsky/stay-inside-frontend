import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default function DeleteComment(props) {
  const handleDelete = e => {
    window.location.reload(); 
    e.preventDefault()
    window.location.reload(true)
    axios.delete(`http://localhost:3000/events/${props.id}`)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
      console.log(err)
    })
  }

  return (
    <form className="event-form-btn" onSubmit={handleDelete}>
      <Button type="submit" className='delete-event'>
        <svg width="25" height="25" viewBox="0 0 15 15" className="event-delete-btn fa-lg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </Button>
    </form>
  )
}