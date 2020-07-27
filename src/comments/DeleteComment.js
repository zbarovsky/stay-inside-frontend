import React from 'react'
import axios from 'axios'
<<<<<<< HEAD
import { Button } from 'react-bootstrap'
=======
import { Button } from 'react-bootstrap';
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985

export default function DeleteComment(props) {
  const handleDelete = e => {
    e.preventDefault()
<<<<<<< HEAD
    window.location.reload(); 
=======
    window.location.reload(true)
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985
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
<<<<<<< HEAD
      <Button onClick={handleDelete}>X</Button>
    </div>  
=======
    <form className="btn" onSubmit={handleDelete}>
      <Button variant="light" type="submit" ><strong>X</strong></Button>
    </form>
    </div>
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985
  )
}