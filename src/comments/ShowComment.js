import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
// import { Toast, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'



export default function ShowComment() {
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/comments', comments)
    .then(response => {
      setComments(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.log('🔥🔥🔥🔥')
    })
    console.log('call the server for bounties!')
  }, [])


  return (
    <div>
      {console.log("😭")}
      {console.log(comments)}
      <ul>
        {comments.map((comment, i) => (
          <li key={i}>
            <Toast>
              <ToastHeader closeButton={false}>
                    <strong className="mr-auto">{comment.name}</strong>
                    <small><DeleteComment id={comment._id} /></small>
              </ToastHeader>  
              <Toast.Body>{comment.content}</Toast.Body>
            </Toast>
          </li>
        ))}
      </ul>
    </div>
  )
}