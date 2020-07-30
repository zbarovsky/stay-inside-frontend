import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
import UpdateComment from '../comments/UpdateComment'
import { Card } from 'react-bootstrap'
import UpdateDropDown from './UpdateDropDown'



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
    <ul className='comment-container'>
      {comments.map((comment, i) => (
        <li key={i} className='comment-list'>
          <Card>
            <Card.Body>
              <h6>{comment.name}</h6> 
              <p>{comment.content}</p>  
              <DeleteComment user={props.user} commentUser={comment.postedBy._id} id={comment._id} />
              <UpdateDropDown user={props.user} commentUser={comment.postedBy._id} id={comment._id}/>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  )
}


