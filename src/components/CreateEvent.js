import React, { useState } from 'react'
import axios from 'axios'
import Datetime from 'react-datetime'

const dateStyle = {
    display: 'inline'
}

const CreateEvent = (props) => {
    const [eventCreated, setEventCreated] = useState(false)
    const [eventInputs, setEventInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        dateTime: Date
    })
    // let eventCreated = props.eventCreated
    // let setEventCreated = props.setEventCreated

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/users/event', eventInputs)
            .then(response => {
                if (response.status === 200) {
                    setEventCreated(true)
                    console.log("😆")
                    console.log(eventCreated)
                    console.log(eventInputs)
                } 
                // else {
                    
                // }
            })
            // .catch(err => console.log('🤬😡'), console.log(err.message))
    }

    const handleInputChange = (e) => {
        e.persist()
        setEventInputs({...eventInputs, [e.target.name]: e.target.value})
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h1>Create a New Event</h1>
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
                        <div className="form-group">
                            <label>Date and Time</label>
                            {/* <input required type="text" name="dateTime" onChange={handleInputChange} /> */}
                        <Datetime required style={dateStyle}/> {console.log("⏰" + Datetime)}
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent