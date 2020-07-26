import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'

export default function ShowComment() {
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/comments')
    .then(response => {
        setComments(response.data)
      console.log(response)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
    })
    console.log('call the server for bounties!')
  }, [])

  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
<<<<<<< HEAD
          <li>
=======
          <li key={i}>
>>>>>>> 8864fb2305bee65baec64c9fb276799ae9e4369b
            {comment.name}=
            {comment.content}
    
            <DeleteComment id={comment._id} />
          </li>
        ))}
      </ul>
    </div>
  )
}