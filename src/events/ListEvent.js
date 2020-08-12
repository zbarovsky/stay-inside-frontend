import React from 'react'

export default function ListEvent({user, event})  {
    
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
              <ShowComment user={user} id={event._id} /> 
              <NewComment user={user} id={event._id} />
            </Card.Body>
          </Card>

        )
}


          