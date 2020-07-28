import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'

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
        <Button  className='btn' type='submit'>
        <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-left-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
        </svg>
        </Button>
      </form>
=======
      <Toast className="mt-2">
        <ToastHeader closeButton={false}>
              <strong className="mr-auto"> 
                <div class="form-group">
                  <label for="exampleFormControlInput1">Name</label>
                  <input type="text" name='name' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                </div>
              
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <input type="text" name='content' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                </div>
              </strong>
              <form onSubmit={commentSubmit}>
            <div class="form-group">
              <input hidden type="text" name='eventId' class="form-control" id="exampleFormControlInput1" value={props.id} onChange={handleInputChange} />
            </div>
            {/* <div class="form-group">
              <input hidden type="text" name='postedBy' class="form-control" id="exampleFormControlInput1" value={props.user._id} onChange={handleInputChange} />
            </div> */}
          </form>
        </ToastHeader>  
            <Button variant="info" className='btn ml-3' type='submit'>Add Comment</Button>
        <Toast.Body> </Toast.Body>
      </Toast>
>>>>>>> 991d685becf7fcb4eb66fef38a80aeddafd34949
    </div>
  )
}
