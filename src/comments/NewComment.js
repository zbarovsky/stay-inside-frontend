import React, { useState } from 'react'
import axios from 'axios'
<<<<<<< HEAD
import {Button} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'

=======
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985

export default function NewComment(props) {
  let [commentCreated, setCreatedComment] = useState(false)
  let [inputs, setInputs] = useState({
    name: '',
    content: '',
  })


  let commentSubmit = e => {
    window.location.reload(); 
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
<<<<<<< HEAD
      <InputGroup 
        className="mb-3"         
        type="text" 
        name='content' 
        onChange={handleInputChange}>
      <FormControl 
        placeholder="Comment"
        aria-describedby="basic-addon2"
        type="text" 
        name='content' 
      />
      <InputGroup.Append>
        <Button onClick={commentSubmit}  variant="outline-secondary">Button</Button>
      </InputGroup.Append>
      </InputGroup>
=======
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
>>>>>>> 39fdc295e5980ea84fde33a07986045fd5bfa985
    </div>
  )
}
