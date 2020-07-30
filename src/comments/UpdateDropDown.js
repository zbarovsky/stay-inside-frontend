import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Collapse } from 'react-bootstrap'
import UpdateComment from './UpdateComment'


export default function UpdateDropDown(props) {
  const [open, setOpen] = useState(false);


  if (props.user.id === props.commentUser) {
    return (
      <>
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="m-0 p-1 bg-light border-0"
        >
          
        <svg width="20" height="20" viewBox="0 0 16 16" class="m-0 bi bi-pencil-square text-primary" fill="#007bff" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <UpdateComment user={props.user} id={props.id}/>
          </div>
        </Collapse>
      </>
    );
  }  else {
    return(
      <div></div>
    )
  }

}