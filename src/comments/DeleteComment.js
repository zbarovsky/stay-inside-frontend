import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default function DeleteComment(props) {
  const handleDelete = e => {
    e.preventDefault()
    window.location.reload(); 
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
      <Button onClick={handleDelete}>X</Button>
    </div>  
  )
}