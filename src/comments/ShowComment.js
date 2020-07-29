import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import UpdateComment from '../comments/UpdateComment'
import { Card } from 'react-bootstrap'



export default function ShowComment(props) {
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    axios.post('http://localhost:3000/comments/eventcomments', {data: {comments: comments, event:props.id}})
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
    <div className='comment-container'>
      {console.log("😭")}
      {console.log(comments)}
      <ul>
        {comments.map((comment, i) => (
          <li key={i} className='comment-list'>
            <Card>
              <Card.Body>
              <p>{comment.name}</p> 
                <p>{comment.content}</p>  
                <DeleteComment id={comment._id} />
                <UpdateComment id={comment._id}/>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}


