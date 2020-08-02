import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'

const CreateEvent = (props) => {
    console.log("line 9", props.user)
    const [eventCreated, setEventCreated] = useState(false)
    const [eventInputs, setEventInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        postedBy: props.user.id,
        date: "",
        time: ""
    })

    // CREATE EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("😆")
        console.log(eventInputs)

        axios.post(`${process.env.REACT_APP_API}/events/create`, eventInputs)
            .then(response => {
                if (response.status === 200) {
                    setEventCreated(true)
                    // window.location.reload(false)
                    // console.log(eventCreated)
                    // console.log(eventInputs)
                    {console.log("⏰" )}
                    {console.log(eventInputs.date )}
                } 
            })
    }

    const handleInputChange = (e) => {
        e.persist()
        setEventInputs({...eventInputs, [e.target.name]: e.target.value})
    }

    if (eventCreated) {
        return (
            <Redirect to={'/profile'} />
        )
    } else {
        return ( 
            <Card className="mx-auto shadow-lg p-0 mb-5 bg-white">
                <Card.Header>Create a New Event</Card.Header>
                <Card.Body className="card-style">
                    <Card.Text>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Event Name</label>
                                <br/>
                                <input required type="text" name="title" onChange={handleInputChange} />
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
    
}

export default CreateEvent