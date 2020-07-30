import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { FormGroup, Label, Input } from 'reactstrap';

// import { Redirect } from 'react-router-dom'

const CreateEvent = (props) => {
    console.log(props.user)
    const [updateEventCreated, setUpdateEventCreated] = useState(false)
    const [updateEventInputs, setUpdateEventInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        date: "",
        time: ""
    })

    // CREATE EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("😆")
        console.log(updateEventInputs)
        window.location.reload()
        axios.put(`http://localhost:3000/events/${props.id}`, updateEventInputs)
            .then(response => {
                if (response.status === 200) {
                    setUpdateEventCreated(true)
                    window.location.reload(true)
                    // console.log(eventCreated)
                    // console.log(eventInputs)
                    {console.log("⏰" )}
                    {console.log(updateEventInputs.date )}
                } 
            })
    }

    const handleInputChange = (e) => {
        e.persist()
        setUpdateEventInputs({...updateEventInputs, [e.target.name]: e.target.value})
    }

    return (
      <Card className="mx-auto">
        <Card.Header>Update Event</Card.Header>
          <Card.Body>  
            <Card.Text>
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label>Event Name</label>
                      <br/>
                      <input required  type="text" name="title" onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                      <label>Link to Event</label>
                      <br/>
                      <input type="text" name="eventLink" onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                      <label>Description</label>
                      <br/>
                      <input required type="text" name="description" onChange={handleInputChange} />
                  </div>
                  <FormGroup>
                      <Label for="exampleDate">Date</Label>
                      <Input
                          type="date"
                          name="date"
                          placeholder="date placeholder"
                          onChange={handleInputChange}
                      />
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleTime">Time</Label>
                      <Input
                          type="time"
                          name="time"
                          placeholder="time placeholder"
                          onChange={handleInputChange}
                      />
                  </FormGroup>
                  <Button variant="info" type="submit" className="btn btn-primary float-right">Submit</Button>
              </form>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CreateEvent