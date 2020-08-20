import React, { useState, useEffect } from 'react'
import DeleteComment from '../comments/DeleteComment'
import axios from 'axios'
import UpdateComment from '../comments/UpdateComment'
import { Card } from 'react-bootstrap'
import UpdateDropDown from './UpdateDropDown'



export default function ShowComment(props) {
  const [comments, setComments] = useState([]);


  function getComment() {
    // if (props.newComment) {
      axios.post(`${process.env.REACT_APP_API}/comments/eventcomments`, {data: {comments: comments, event:props.id}})
      .then(response => {
        setComments(response.data)
        // console.log(response.data)
      })
      .catch(err => {
        console.log('🔥🔥🔥🔥')
        console.log(err)
      })
      console.log('call for server')
      props.setNewComment(false)
    // }
  }

  useEffect(getComment, [])
  useEffect(getComment, [props.newComment])

  return (
    <ul className='comment-container'>
      {comments.map((comment, i) => (
        <li key={i} className='comment-list'>
          <Card className='m-1 p-1'>
            <Card.Body className='p-1 m-0'>
              <h6>{comment.name}</h6> 
                <p className='m-0 ml-2 p-1'>{comment.content}</p>  
              <DeleteComment user={props.user} commentUser={comment.postedBy._id} id={comment._id} />
              <UpdateDropDown user={props.user} commentUser={comment.postedBy._id} id={comment._id}/>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  )
}


