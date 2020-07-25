import React, { useState } from 'react'
import axios from 'axios'

const CreateEvent = (props) => {
    const [eventCreated, setEventCreated] = useState(false)
    const [inputs, setInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        dateTime: Date
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/users/event', inputs)
            .then(response => {
                if (response.status === 200) {
                    setEventCreated(true)
                    console.log("😆")
                    console.log(eventCreated)
                } 
                // else {
                    
                // }
            })
            // .catch(err => console.log('🤬😡'), console.log(err.message))
    }

    const handleInputChange = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h1>Create a New Event</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Event Name</label>
                            <input required type="text" name="title" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Link to Event</label>
                            <input type="text" name="eventLink" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input required type="text" name="description" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Date and Time</label>
                            <input required type="text" name="dateTime" onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent