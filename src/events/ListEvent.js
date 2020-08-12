import React, { useState }from 'react'
import { Card } from 'react-bootstrap'
import NewComment from '../comments/NewComment'
import ShowComment from '../comments/ShowComment'
import DeleteEvent from '../events/DeleteEvent'

export default function ListEvent({user, event})  {
    const [newComment, setNewComment] = useState(false)


        return (
            <Card className='shadow-lg p-0 mb-5 bg-white'>
            <Card.Header className='bg-light p-1'>
              <h5 className='event-title m-2'>{event.title}</h5> 
              <DeleteEvent id={event._id}/>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {event.date}
                <br/>
                {event.time}
                <br/>
                <a target="_blank" href={`https://${event.eventLink}`}>{event.eventLink}</a>
                <br/>
               <h5>{event.description}</h5> 
              </Card.Text>
              <ShowComment user={user} id={event._id} setNewComment={setNewComment} newComment={newComment} /> 
              <NewComment user={user} id={event._id} setNewComment={setNewComment} />
            </Card.Body>
          </Card>

        )
}


          