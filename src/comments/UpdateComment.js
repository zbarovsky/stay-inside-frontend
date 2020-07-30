import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NewComment(props) {
  let [updateComment, setUpdateComment] = useState(false)
  let [inputs, setInputs] = useState({
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
    <form onSubmit={handleUpdateComment}>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Comment</label>
        <input type="text" name='content' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <input hidden type="text" name='eventId' class="form-control" id="exampleFormControlInput1" value={props.id} onChange={handleInputChange} />
      </div>
      <Button  className='btn' type='submit'>
        Submit
      </Button>
    </form>
  )
}
