import React from 'react'
import axios from 'axios'

export default function DeleteComment(props) {
  const handleDelete = e => {
    e.preventDefault()
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
    <form className="delete-bounty-button" onSubmit={handleDelete}>
      <input type="submit" value='Delete' />
    </form>
    </div>
  )
}