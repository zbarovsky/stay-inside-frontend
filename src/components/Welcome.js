import React from 'react'
import ShowEvents from '../events/ShowEvents'


export default function Welcome(props) {
    console.log(props.user)
    return(
        <div className='home-container'>
            <ShowEvents user={props.user}/>
        </div>
    )
}