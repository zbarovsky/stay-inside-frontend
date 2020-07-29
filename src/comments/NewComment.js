import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'



export default function NewComment(props) {
  let [commentCreated, setCreatedComment] = useState(false)
  let [commentInputs, setCommentInputs] = useState({
    name: props.user.name,
    content: "",
    postedBy: props.user.id,
    eventId: props.id
  })
console.log(props.id)

  let commentSubmit = e => {
    window.location.reload(); 
    e.preventDefault()
      axios.post('http://localhost:3000/comments', commentInputs)
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
    setCommentInputs({...commentInputs, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <Toast className="mt-2">
        <ToastHeader closeButton={false}>
          <form onSubmit={commentSubmit}>
            <div class="form-group">
              <input hidden type="text" name='eventId' class="form-control" id="exampleFormControlInput1" value={props.id} onChange={handleInputChange} />
            </div>
            <strong className="mr-auto"> 
                {/* <div class="form-group">
                  <label for="exampleFormControlInput1">Name</label>
                  <input hidden type="text" name='postedBy' value={props.user.id} class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                </div> */}
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <input type="text" name='content' class="form-control" id="exampleFormControlInput1" onChange={handleInputChange} />
                </div>
              </strong>
            {/* <div class="form-group">
              <input hidden type="text" name={props.user._id} class="form-control"  onChange={handleInputChange} />
            </div> */}
            <Button variant="info" className='btn ml-3' type='submit'>Add Comment</Button>
          </form>
        </ToastHeader>  
        <Toast.Body> </Toast.Body>
      </Toast>
    </div>
  )
}
