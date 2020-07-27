import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

export default function DeleteComment(props) {
  const handleDelete = e => {
    e.preventDefault()
    window.location.reload(true)
    axios.delete(`http://localhost:3000/comments/${props.id}`)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
      console.log(err)
    })
  }

  return (
    <div>
    <form className="btn" onSubmit={handleDelete}>
      <Button variant="light" type="submit" ><strong>X</strong></Button>
    </form>
    </div>
  )
}