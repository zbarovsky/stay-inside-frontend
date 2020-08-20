import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap' 
import { Link, Redirect } from 'react-router-dom';



export default function NewComment(props) {
  let [commentCreated, setCommentCreated] = useState(false)
  let [commentInputs, setCommentInputs] = useState({
    name: props.user.name,
    content: "",
    postedBy: props.user.id,
    eventId: props.id
  })
console.log(props.id)

  let commentSubmit = e => {

    // window.location.reload(); 
    e.preventDefault()
      axios.post(`${process.env.REACT_APP_API}/comments`, commentInputs)
      .then(response => {
          console.log(response)
          // setCommentCreated(true,[])
          props.setNewComment(true)
          setCommentInputs({...commentInputs, content:""})
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

    if (commentCreated) {
        console.log(commentCreated)
        return (
          <Redirect to={'/'} /> 
        )
    } else {
      return (
        <Form onSubmit={commentSubmit}>
          <InputGroup className="mb-3 mt-3">
          <FormControl
            aria-describedby="basic-addon2"
            hidden type="text" name='eventId'
            value={props.id}
          />
            <FormControl
            className='rounded-sm'
            placeholder="Comment"
            aria-label="Comment"
            aria-describedby="basic-addon2"
            type="text" name='content'
            onChange={handleInputChange}
            value={commentInputs.content}
          />
          <InputGroup.Append>
            <Button variant="outline-info" type='submit'>Submit</Button>
          </InputGroup.Append>
          </InputGroup>
        </Form>
      )
  }
}


  
