import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
<<<<<<< HEAD
import { Toast } from 'react-bootstrap'
import { ToastHeader } from 'react-bootstrap/ToastHeader'
=======
// import { Toast, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985



export default function ShowComment() {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
<<<<<<< HEAD
    setRefresh(false)
=======
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985
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
      {console.log("😭")}
      {console.log(comments)}
      <ul>
        {comments.map((comment, i) => (
<<<<<<< HEAD
          <li key={i} className='comment-list'>
            <Toast>
              <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{comment.name}</strong>
                <DeleteComment id={comment._id} />
              </Toast.Header>
=======
          <li key={i}>
            <Toast>
              <ToastHeader closeButton={false}>
                    <strong className="mr-auto">{comment.name}</strong>
                    <small><DeleteComment id={comment._id} /></small>
              </ToastHeader>  
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985
              <Toast.Body>{comment.content}</Toast.Body>
            </Toast>
          </li>
        ))}
      </ul>
    </div>
  )
}

