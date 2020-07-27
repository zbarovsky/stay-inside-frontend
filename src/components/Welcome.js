import React from 'react'
import ShowEvents from '../events/ShowEvents'


export default function Welcome(props) {
    return(
        <div>
            <ShowEvents user={props.user}/>
        </div>
    )
}