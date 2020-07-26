import React from 'react'
import axios from 'axios'

export default function DeleteComment() {
  const handleDelete = e => {
    e.preventDefault()
    axios.post('http://localhost:3000')
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