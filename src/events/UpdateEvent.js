// import React, { useState, useEffect } from 'react'
// import axios from 'axios'


// // UPDATE EVENTS
// let [events, setEvents] = useState([])

// useEffect(()=>{
//     axios.get('http://localhost:3000/events', events)
//     .then(response => {
//         setEvents(response.data)
//         console.log(response)
//     })
//     .catch(err => {
//       console.log('🔥🔥🔥🔥')
//       console.log(err)
//     })
//   }, [])
// const updateEvent = (props) => {
//     const [eventUpdated, setEventUpdated] = useState(false)
//     const [updateInput, setUpdateInput] = useState({
//         title: event.title,
//         eventLink: event.eventLink,
//         description: event.description,
//         dateTime: Date
//     })



//     const handleUpdate = (e) => {
//         e.preventDefault()

//         axios.put(`http://localhost:3000/events/${event._id}`, updateInput)
//             .then(response => {
//                 if (response.status === 200) {
//                     setEventUpdated(true)
//                     console.log("😆")
//                     console.log(eventUpdated)
//                     console.log(updateInput)
//                 } 
//                 // else 
                    
//             // }
//         })
//         // .catch(err => console.log('🤬😡'), console.log(err.message))
//     }

// }


// export default updateEvent