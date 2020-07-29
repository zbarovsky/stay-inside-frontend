import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Collapse } from 'react-bootstrap'
import UpdateComment from '../comments/UpdateComment'


export default function Click(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Update
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <UpdateComment id={props.id}/>
        </div>
      </Collapse>
    </>
  );
}