import React from 'react'
import ShowEvents from '../events/ShowEvents'


export default function Welcome(props) {
    console.log(props.user)
    return(
        <div className='home-container'>
            <h1 className="homeText mt-5">View all Events Below</h1>
            <h3 className="homeText mb-5">Drop a Comment to Engage in the Community</h3>
            <ShowEvents user={props.user}/>
        </div>
    )
}