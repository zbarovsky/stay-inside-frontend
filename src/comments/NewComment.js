import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function NewComment(props) {
  let [commentCreated, setCreatedComment] = useState(false)
  let [inputs, setInputs] = useState({
    name: '',
    content: '',
  })


  let commentSubmit = e => {
    e.preventDefault()
    window.location.reload(true)
      axios.post('http://localhost:3000/comments', inputs)
      .then(response => {
          console.log(response)
          setCreatedComment(true)
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
      <form onSubmit={commentSubmit}>
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
        <Button variant="secondary" className='btn' type='submit'>Submit</Button>
      </form>
    </div>
  )
}