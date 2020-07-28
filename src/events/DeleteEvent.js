import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default function DeleteComment(props) {
  const handleDelete = e => {
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
    <div className="delete-event">
      <form className="btn" onSubmit={handleDelete}>
        <Button variant="danger" type="submit" value='Delete Event'>Delete Event</Button>
      </form>
    </div>
  )
}