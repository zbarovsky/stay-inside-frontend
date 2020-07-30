import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Collapse } from 'react-bootstrap'
import UpdateComment from './UpdateComment'


export default function UpdateDropDown(props) {
  const [open, setOpen] = useState(false);

  console.log("UpdateDropDown User Id", props.user.id)
  console.log("UpdateDropDown Comment User", props.commentUser)

  let button
  if (props.user.id === props.commentUser){
    console.log("THEY ARE THE SAME")
  } else {
    console.log('WHAT IS GOING ON?')
  }

  if (props.user.id === props.commentUser) {
    return (
      <div>
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
          Update
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <UpdateComment user={props.user} id={props.id}/>
          </div>
        </Collapse>
      </div>
    );
  }  else {
    return(
      <div></div>
    )
  }
}