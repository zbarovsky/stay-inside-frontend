import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'

export default function ShowComment() {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    setRefresh(false)
    axios.get('http://localhost:3000/comments', comments)
    .then(response => {
      setComments(response.data)
      console.log(response)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
    })
    console.log('call for server')
  }, [])

  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
          <li key={i}>
            {comment.name}=
            {comment.content}
            <DeleteComment id={comment._id} refresh={setRefresh} />
          </li>
        ))}
      </ul>
    </div>
  )
}