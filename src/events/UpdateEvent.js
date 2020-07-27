import React, { useState, useEffect } from 'react'
import axios from 'axios'


// UPDATE EVENTS
const updateEvent = (props) => {
    const [eventUpdated, setEventUpdated] = useState(false)
    const [updateInput, setUpdateInput] = useState({
        title: "",
        eventLink: "",
        description: "",
        dateTime: Date
    })

    const handleUpdate = (e) => {
        e.preventDefault()

        axios.update(`http://localhost:3000/events/${event._id}`, updateInput)
            .then(response => {
                if (response.status === 200) {
                    setEventUpdated(true)
                    console.log("😆")
                    console.log(eventUpdated)
                    console.log(updateInput)
                } 
                // else 
                    
            // }
        })
        // .catch(err => console.log('🤬😡'), console.log(err.message))
    }

}


export default updateEvent