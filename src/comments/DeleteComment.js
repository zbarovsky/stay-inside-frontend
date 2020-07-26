import React from 'react'
import axios from 'axios'

export default function DeleteComment() {
  const handleDelete = e => {
    e.preventDefault()
    axios.delete(`http://localhost:3000/comments/`)
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
      <input type="submit" value='Delete' />
    </form>
    </div>
  )
}