import React from 'react'
import axios from 'axios'

export default function DeleteComment(props) {
  const handleDelete = e => {
    window.location.reload(); 
    e.preventDefault()
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
    <div className='delete-event-container'>
    <form className="form-btn" onSubmit={handleDelete}>
      <input type="submit" value='Delete' />
    </form>
    </div>
  )
}