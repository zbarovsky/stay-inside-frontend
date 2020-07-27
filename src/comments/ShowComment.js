import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
import { Toast } from 'react-bootstrap'
import { ToastHeader } from 'react-bootstrap/ToastHeader'



export default function ShowComment() {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    setRefresh(false)
    axios.get('http://localhost:3000/comments', comments)
    .then(response => {
      setComments(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
      console.log(err)
    })
    console.log('call for server')
  }, [])

  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
          <li key={i} className='comment-list'>
            <Toast>
              <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{comment.name}</strong>
                <DeleteComment id={comment._id} />
              </Toast.Header>
              <Toast.Body>{comment.content}</Toast.Body>
            </Toast>
          </li>
        ))}
      </ul>
    </div>
  )
}

