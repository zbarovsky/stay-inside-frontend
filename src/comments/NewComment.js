import React, { useState } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'


export default function NewComment(props) {
  let [commentCreated, setCreatedComment] = useState(false)
  let [inputs, setInputs] = useState({
    name: '',
    content: '',
  })

  console.log(props.user)

  let commentSubmit = e => {
    window.location.reload(); 
    e.preventDefault()
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
    </div>
  )
}
