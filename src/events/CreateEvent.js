import React, { useState, useEffect } from 'react'
import axios from 'axios'
import updateEvent from './UpdateEvent'
import DeleteEvent from './DeleteEvent'
import { Card, Button } from 'react-bootstrap'
import Datetime from 'react-datetime'
// import { Redirect } from 'react-router-dom'

const CreateEvent = (props) => {
    const [eventCreated, setEventCreated] = useState(false)
    const [eventInputs, setEventInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        date: ""
    })

    // CREATE EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/events/create', eventInputs)
            .then(response => {
                if (response.status === 200) {
                    setEventCreated(true)
                    window.location.reload(true)
                    console.log("😆")
                    console.log(eventCreated)
                    console.log(eventInputs)
                    {console.log("⏰" )}
                    {console.log(eventInputs.date )}
                } 
            })
    }

    const handleInputChange = (e) => {
        e.persist()
        setEventInputs({...eventInputs, [e.target.name]: e.target.value})
    }

    return (
        <div className="row mt-4">
           
            <div className="col-md-7 offset-md-3">
                <Card className="mb-2">
                    <Card.Body className="card-style">
                        <Card.Title>Create a New Event</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Link</Card.Subtitle>
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
                                {/* <div className="form-group">
                                    <label></label>
                                    <br/>
                                    <input required hidden type="text" name="postedBy" onChange={handleInputChange} value={props.user.id}/>
                                </div> */}
                                <div className="form-group">
                                    <label>Date and Time</label>
                                    {/* <input required type="text" name="dateTime" onChange={handleInputChange} /> */}
                                    <Datetime type={Date} name={Date}/> 
                                </div>
                                <Button variant="info" type="submit" className="btn btn-primary float-right">Submit</Button>
                            </form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>
                    {/* <updateEvent event={events}/> */}
                </div>
            </div>
        </div>
    )
}

export default CreateEvent