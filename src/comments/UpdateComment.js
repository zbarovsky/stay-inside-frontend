import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NewComment(props) {
  let [updateComment, setUpdateComment] = useState(false)
  let [inputs, setInputs] = useState({
    name: '',
    content: '',
  })

  let handleUpdateComment = e => {
    window.location.reload(); 
    e.preventDefault()
    window.location.reload(true)
      axios.put(`http://localhost:3000/comments/${props.id}`, inputs)
      .then(response => {
          console.log(response)
          setUpdateComment(true)
          console.log(setUpdateComment)
      })
      .catch(err => {
        console.log('🔥🔥🔥🔥')
        console.log(err)
      })
    }

  const handleInputChange = e => {
    e.persist()
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleUpdateComment}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" name='name' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Comment</label>
          <input type="text" name='content' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <input hidden type="text" name='eventId' class="form-control" id="exampleFormControlInput1" value={props.id} onChange={handleInputChange} />
        </div>
        {/* <div class="form-group">
          <input hidden type="text" name='postedBy' class="form-control" id="exampleFormControlInput1" value={props.user._id} onChange={handleInputChange} />
        </div> */}
        <Button  className='btn' type='submit'>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </Button>
      </form>
    </div>
  )
}
