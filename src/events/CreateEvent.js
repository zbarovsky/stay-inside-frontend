import React, { useState, useEffect } from 'react'
import axios from 'axios'
import updateEvent from './UpdateEvent'
import DeleteEvent from './DeleteEvent'
import { Card } from 'react-bootstrap'
// import Datetime from 'react-datetime'
// import { Redirect } from 'react-router-dom'

// const dateStyle = {
//     display: 'inline'
// }



const CreateEvent = (props) => {
    const [eventCreated, setEventCreated] = useState(false)
    const [eventInputs, setEventInputs] = useState({
        title: "",
        eventLink: "",
        description: "",
        dateTime: Date
    })

    // GET EVENTS
    let [events, setEvents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/events', events)
        .then(response => {
            setEvents(response.data)
            console.log(response)
        })
        .catch(err => {
          console.log('🔥🔥🔥🔥')
          console.log(err)
        })
        console.log('call the server for bounties!')
      }, [])


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
                } 
                // else 
                    
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
            <ul>
                {events.map((event, i) => (
                <li>
                    <Card className="mb-2"style={{ width: '65vw' }}>
                    <Card.Body style={{background: "rgba: (0,0,0,0.5)"}}>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Link</Card.Subtitle>
                        <Card.Text>
                        {event.description}
                        </Card.Text>
                        <DeleteEvent id={event._id}/>
                    </Card.Body>
                    </Card>
                </li>
                ))}
            </ul>
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
                        {/* <div className="form-group">
                            <label></label>
                            <br/>
                            <input required hidden type="text" name="postedBy" onChange={handleInputChange} value={props.user.id}/>
                        </div> */}
                        {/* <div className="form-group">
                            <label>Date and Time</label>
                            <input required type="text" name="dateTime" onChange={handleInputChange} />
                        <Datetime required style={dateStyle}/> {console.log("⏰" + Datetime)}
                        </div> */}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
                <div>
                    {/* <updateEvent event={events}/> */}
                </div>
            </div>
        </div>
    )
}

export default CreateEvent